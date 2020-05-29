import React, { Component } from 'react';
import { MyContext } from '../contexts/context';

export default class LoginPage extends Component {
  static contextType = MyContext;
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

    this.context.setUserId()
    this.props.history.push('/')
  }
  render() {
    return (
      <section>
        <h2>Login</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlFor='Username'>
          Username:
          <input onChange={(e) => this.handleUsernameChange(e)} type='text' name='Username'/>
        </label>

        <label htmlFor='Password'>
          Password:
          <input onChange={(e) => this.handlePasswordChange(e)} type='text' name='Password'/>
        </label>

        <input type='submit' value="Login"/>
        </form>
      </section>
    )
  }
}