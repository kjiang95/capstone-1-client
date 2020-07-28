import React, { Component } from 'react';
import { MyContext } from '../../../contexts/context';
import GiftApiService from '../../../services/gift-api-service'

export default class GiftForm extends Component {
  static contextType = MyContext;
  
  constructor(props) {
    super(props);
    this.state = {
      idea: '',
      notes: ''
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

  handleSubmit = (e, newGift) => {
    this.setState({
      idea: '',
      notes: ''
    })
    this.context.handleGiftFormSubmit(e, newGift);
  }

  render () {
    const newGift = {
      event_id: this.context.eventId,
      idea: this.state.idea,
      notes: this.state.notes
    }

    return(
      <form onSubmit={e => {this.handleSubmit(e, newGift)}}>
        <label htmlFor='GiftIdea'>
          Idea:
          <input value={this.state.idea} onChange={this.handleIdeaChange} type='text' name='GiftIdea'/>
        </label>

        <label htmlFor='GiftNotes'>
          Notes:
          <textarea value={this.state.notes} onChange={this.handleNotesChange} name='GiftNotes'/>
        </label>

        <input type='submit' value="Submit" />
      </form>
    )
  }
}