import React, { Component } from 'react';
import GiftApiService from '../services/gift-api-service';
import GifteeApiService from '../services/giftee-api-service';
import EventsApiService from '../services/event-api-service';
import TokenService from '../services/token-service';


export const MyContext = React.createContext({
  userId: null,
  gifteeId: null,
  eventId: null,
  expandedGiftee: null,

  giftees: [],
  events: [],
  gifts: [],

  getGifts: () => {},
  getGiftees: () => {},
  setGifteeId: () => {},
  handleGiftFormSubmit: () => {},
  handleNewEventSubmit: () => {},
  setEventId: () => {},
  handleGiftDelete: () => {},
  toggleExpandedGiftee: () => {}
});

export default class MyProvider extends Component {
  state = {
    userId: null,
    gifteeId: null,
    eventId: null,
    expandedGiftee: null,

    gifts: [],
    giftees: [],
    events: [],

    getGifts: () => {},
    getGiftees: () => {},
    setGifteeId: () => {},
    handleGiftFormSubmit: () => {},
    handleNewEventSubmit: () => {},
    setEventId: () => {},
    handleGiftDelete: () => {},
    toggleExpandedGiftee: () => {}
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
    if (!TokenService.getAuthToken()) {
      return
    }
    GifteeApiService.getGifteesByUserId()
      .then(giftees => {
        this.setState({
          giftees: giftees
        })
      })
  }

  setGifteeId = (id) => {
    this.setState({
      expandedGiftee: id
    })
  }
  
  getEvents = () => {
    EventApiService.getEventByGifteeId(gifteeId)
    .then(events => {
      this.setState({
        events: events
      });
    });  
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

  toggleExpandedGiftee = (eventId) => {
    (this.state.expandedGiftee === eventId)
      ? this.setState({ expandedGiftee: null })
      : this.setState({ expandedGiftee: eventId })
  }

  render() {
    return (
      <MyContext.Provider value={{
        userId: this.state.userId,
        gifteeId: this.state.gifteeId,
        eventId: this.state.eventId,
        expandedGiftee: this.state.expandedGiftee,

        gifts: this.state.gifts,
        giftees: this.state.giftees,
        events: this.state.events,

        getGifts: this.getGifts,
        getGiftees: this.getGiftees,
        setGifteeId: this.setGifteeId,
        handleGiftFormSubmit: this.handleGiftFormSubmit,
        handleNewEventSubmit: this.handleNewEventSubmit,
        setEventId: this.setEventId,
        handleGiftDelete: this.handleGiftDelete,
        toggleExpandedGiftee: this.toggleExpandedGiftee
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }

}
