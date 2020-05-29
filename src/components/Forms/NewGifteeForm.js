import React, { Component } from 'react';
import { MyContext } from '../../contexts/context';
import GifteeApiService from '../../services/giftee-api-service'

export default class NewGifteeForm extends Component {

  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      relationship: 'Family'
    }
  }

  handleNameChange = (e) => {
    e.preventDefault()
    this.setState({fullName: e.target.value})
  }

  handleRelationshipChange = (e) => {
    e.preventDefault()
    this.setState({relationship: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newGiftee = {
      user_id: this.context.userId,
      full_name: this.state.fullName,
      relationship: this.state.relationship
    }

    console.log(newGiftee);

    GifteeApiService.postGiftee(newGiftee)
      .then(returnedGiftee => {
        this.context.setGifteeId(returnedGiftee.id)
        this.props.history.push('/events')
      })
      .then(() => {
        this.context.getGiftees();
      })

  }

  render () {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='CreateGifteeName'>
          Name:
          <input onChange={this.handleNameChange} type='text' name='createGifteeName'/>
        </label>

        <label htmlFor='CreateGifteeRelationship'>
          Select Relationship:
          <select value={this.state.relationship} onChange={this.handleRelationshipChange} name='RegisterPassword'>
            <option value='Family'>Family</option>
            <option value='Friend'>Friend</option>
            <option value='Coworker'>Coworker</option>
            <option value='Other'>Other</option>
          </select>
        </label>

        <input type='submit' value="Create Account" />
      </form>
    )
  }
}