import React, {Component} from 'react';
import logo from '../logo.png';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>This is the Gift App!</h1>
        <img className='logo' src={logo} alt='logo'/>
        <section>
          <h2>
            The purpose of this app is to track gift-worthy events for your loved ones. It allows you to note down gifts ideas of specific events for specific people, and come back to those view those ideas in a simple, streamlined manner. The flow of the app is as outlined below.
          </h2>
          <ol className='instructions'>
            <li>Register for an account</li>
            <li>Log in</li>
            <li>Add a giftee</li>
            <li>Add an event you wish to remember for that giftee</li>
            <li>Add ideas for potential gifts</li>
            <li>You can navigate through and view the different giftees and events you've set up to track using the sidebar</li>
          </ol>
        </section>
      </div>

    )
  }
}