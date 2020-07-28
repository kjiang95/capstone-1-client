import React, {Component} from 'react';
import logo from '../../logo.png';

export default class LandingPage extends Component {
  render() {
    return (
      <div className='landingPage'>
        <h1>This is the Gift App!</h1>
        <img className='logo' src={logo} alt='logo'/>
        <section>
          <h2>
            The purpose of this app is to track gift-worthy events for your loved ones. It allows you to note down gifts ideas of specific events for specific people, and come back to those view those ideas in a simple, streamlined manner.
          </h2>
          <h2>If you'd like to explore the app without making and account, login using:</h2>
          <h3>Username: userone</h3>
          <h3>Password: @Password1</h3>
        </section>
      </div>

    )
  }
}