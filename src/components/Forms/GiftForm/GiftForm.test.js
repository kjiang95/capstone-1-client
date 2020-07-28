import React from 'react';
import ReactDOM from 'react-dom';
import GiftForm from './GiftForm';

describe('<RegistrationForm />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <GiftForm/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });