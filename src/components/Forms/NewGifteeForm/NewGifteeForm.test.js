import React from 'react';
import ReactDOM from 'react-dom';
import NewGifteeForm from './NewGifteeForm';

describe('<RegistrationForm />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <NewGifteeForm/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });