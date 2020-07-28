import React from 'react';
import ReactDOM from 'react-dom';
import NewEventForm from './NewEventForm';

describe('<RegistrationForm />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <NewEventForm/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });