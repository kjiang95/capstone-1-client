import React, { Component } from 'react';
import { MyContext } from '../../contexts/context';
import GiftApiService from '../../services/gift-api-service'

export default class GiftForm extends Component {
  static contextType = MyContext;
  
  constructor(props) {
    super(props);
    this.state = {
      idea: null,
      notes: null
    }
  }

  handleIdeaChange = (e) => {
    e.preventDefault()
    this.setState({idea: e.target.value})
  }

  handleNotesChange = (e) => {
    e.preventDefault()
    this.setState({notes: e.target.value})
  }



  render () {
    const newGift = {
      event_id: this.context.eventId,
      idea: this.state.idea,
      notes: this.state.notes
    }

    return(
      <form onSubmit={e => {this.context.handleGiftFormSubmit(e, newGift)}}>
        <label htmlFor='GiftIdea'>
          Idea:
          <input onChange={this.handleIdeaChange} type='text' name='GiftIdea'/>
        </label>

        <label htmlFor='GiftNotes'>
          Notes:
          <textarea value={this.state.value} onChange={this.handleNotesChange} name='GiftNotes'/>
        </label>

        <input type='submit' value="Submit" />
      </form>
    )
  }
}