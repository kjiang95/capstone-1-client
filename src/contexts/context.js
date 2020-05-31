import React, { Component } from 'react';
import GiftApiService from '../services/gift-api-service';
import GifteeApiService from '../services/giftee-api-service';
import EventsApiService from '../services/event-api-service';


export const MyContext = React.createContext({
  userId: null,
  gifteeId: null,
  eventId: null,
  posted: 0,

  giftees: [],
  events: [],
  gifts: [],

  getGifts: () => {},
  getGiftees: () => {},
  setGifteeId: () => {},
  handleGiftFormSubmit: () => {},
  handleNewEventSubmit: () => {},
  setPostedToZero: () => {},
  setPostedToOne: () => {},
  setEventId: () => {},
  handleGiftDelete: () => {},
  setUserId: () => {},
  logOutUserId: () => {}
});

export default class MyProvider extends Component {
  state = {
    userId: null,
    gifteeId: null,
    eventId: null,
    posted: 0,

    gifts: [],
    giftees: [],

    getGifts: () => {},
    getGiftees: () => {},
    setGifteeId: () => {},
    handleGiftFormSubmit: () => {},
    handleNewEventSubmit: () => {},
    setPostedToZero: () => {},
    setPostedToOne: () => {},
    setEventId: () => {},
    handleGiftDelete: () => {},
  };

  setEventId = (eventId) => {
    this.setState({
      eventId: eventId
    })
  }
    
  getGifts = (eventId) => {
    this.setEventId(eventId)
    GiftApiService.getGiftsByEventId(eventId)
      .then(gifts => {
        this.setState({
          gifts: gifts
        });
      });
  };

  getGiftees = () => {
    GifteeApiService.getGifteesByUserId(this.state.userId)
      .then(giftees => {
        this.setState({
          giftees: giftees
        })
      })
  }

  setGifteeId = (id) => {
    this.setState({
      gifteeId: id
    })
  }

  handleGiftFormSubmit = (e, newGift) => {
    e.preventDefault()
    GiftApiService.postGift(newGift)
      .then(() => {
        GiftApiService.getGiftsByEventId(this.state.eventId)
          .then(gifts => {
            this.setState({
              gifts: gifts
            })
          })
      })
  }

  handleNewEventSubmit = (e, newEvent) => {
    e.preventDefault()
    return EventsApiService.postEvent(newEvent)
  }

  setPostedToOne= () => {
    this.setState({
      posted: 1
    })
  }

  setPostedToZero = () => {
    this.setState({
      posted: 0
    })
  }

  handleGiftDelete = (giftId) => {
    GiftApiService.deleteGiftById(giftId)
      .then(() => {
        GiftApiService.getGiftsByEventId(this.state.eventId)
          .then(gifts => {
            this.setState({
              gifts: gifts
            });
          });
      })
  }

  render() {
    return (
      <MyContext.Provider value={{
        userId: this.state.userId,
        gifteeId: this.state.gifteeId,
        eventId: this.state.eventId,
        posted: this.posted,

        gifts: this.state.gifts,
        giftees: this.state.giftees,

        getGifts: this.getGifts,
        getGiftees: this.getGiftees,
        setGifteeId: this.setGifteeId,
        handleGiftFormSubmit: this.handleGiftFormSubmit,
        handleNewEventSubmit: this.handleNewEventSubmit,
        setPostedToZero: this.setPostedToZero,
        setPostedToOne: this.setPostedToOne,
        setEventId: this.setEventId,
        handleGiftDelete: this.handleGiftDelete
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }

}
