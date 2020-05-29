import React, { Component } from 'react';
import UserApiService from '../../services/user-api-service';

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = (e) => {
    e.preventDefault()
    this.setState({username: e.target.value})
  }

  handlePasswordChange = (e) => {
    e.preventDefault()
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newUser = { 
      username: this.state.username,
      password: this.state.password
    }

    UserApiService.postUser(newUser)
      .then(newUser => {
        console.log(newUser)
      })
      .then(() => {
        this.props.history.push('/')
      })
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} className='RegistrationForm'>
        <label htmlFor='RegisterUsername'>
          Username:
          <input onChange={(e) => this.handleUsernameChange(e)} type='text' name='RegisterUsername'/>
        </label>

        <label htmlFor='RegisterPassword'>
          Password:
          <input onChange={(e) => this.handlePasswordChange(e)} type='text' name='RegisterPassword'/>
        </label>

        <input type='submit' value="Create Account" />
      </form>
    )
  }
}