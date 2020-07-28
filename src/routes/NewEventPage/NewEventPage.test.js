import React from 'react';
import ReactDOM from 'react-dom';
import NewEventPage from './NewEventPage';

describe('<RegistrationForm />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <NewEventPage/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
});