import React, {Component} from 'react';
import logo from '../logo.png';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>This is the Gift App!</h1>
        <img src={logo} alt='logo'/>
      </div>

    )
  }
}