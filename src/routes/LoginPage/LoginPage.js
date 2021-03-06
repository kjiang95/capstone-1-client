import React, { Component } from 'react';
import { MyContext } from '../../contexts/context';
import TokenService from '../../services/token-service';
import UserApiService from '../../services/user-api-service';

export default class LoginPage extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null
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
    this.setState({ error: null })
    const username = this.state.username
    const password = this.state.password
    
    UserApiService.postLogin({
      user_name: username,
      password: password
    })
      .then(res => {
        this.setState({
          username: '',
          password: ''
        })
        TokenService.saveAuthToken(res.authToken)
      })
      .then(() => {
        this.context.getGiftees();
        this.props.history.push('/');
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
  render() {
    return (
      <section className='loginPage'>
        <h2>Login</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlFor='Username'>
          Username:
          <input onChange={(e) => this.handleUsernameChange(e)} type='text' name='Username'/>
        </label>

        <label htmlFor='Password'>
          Password:
          <input onChange={(e) => this.handlePasswordChange(e)} type='password' name='Password'/>
        </label>

        <input type='submit' value="Login"/>
        </form>
      </section>
    )
  }
}