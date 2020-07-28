import React, { Component } from 'react';
import RegistrationForm from '../../components/Forms/RegistrationForm/RegistrationForm';

export default class RegistrationPage extends Component {
  render() {
    return (
      <section>
        <h2>Register</h2>
        <RegistrationForm
          {...this.props}
        />
      </section>
    )
  }
}