import React, { Component } from 'react';
import '../forms.css';
import { MyContext } from '../../../contexts/context';

export default class NewEventForm extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      eventType: null,
      date: new Date(),
      budget: 0.00
    }
  }

  handleTypeChange = (e) => {
    e.preventDefault()
    this.setState({eventType: e.target.value})
  }

  handleDateChange = (date) => {
    this.setState({ date: new Date(date) })
  }

  handleBudgetChange = (e) => {
    e.preventDefault()
    this.setState({ budget: e.target.value })
  }

  reRouteToNewEvent = (e, newEvent) => {
    this.context.handleNewEventSubmit(e, newEvent)
      .then(returnedEvent => {
        this.context.setEventId(returnedEvent.id)
        this.props.history.push(`events/${returnedEvent.id}/gifts`)
      })
      .catch(err => console.log(err))
  }

  render () {
    //Current state is sent in req body on submit event
    const newEvent = {
      giftee_id: this.context.expandedGiftee,
      event_type: this.state.eventType,
      event_date: this.state.date,
      budget: this.state.budget,
    }

    return(
      //calendar is a reusable react component
      <form className='new-event-form' onSubmit={(e) => {this.reRouteToNewEvent(e, newEvent)}}>
        <label htmlFor='CreateEventType'>
          Event Type:
          <input onChange={this.handleTypeChange} type='text' name='CreateEventType'/>
        </label>
        <label htmlFor='setDate'>
          Set Date:
          <input
            type='date'
            onChange={(e) => this.handleDateChange(e.target.value)}
          />
        </label>
        <label htmlFor='SetBudget'>
          Set Budget:
          <input type='number' value={this.state.budget} onChange={this.handleBudgetChange} name='SetBudget'/>
        </label>
        <input type='submit' value="Create Event"/>
      </form>
    )
  }
}