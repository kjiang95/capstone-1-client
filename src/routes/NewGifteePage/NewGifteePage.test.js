import React from 'react';
import ReactDOM from 'react-dom';
import NewGifteePage from './NewGifteePage';

describe('<RegistrationForm />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <NewGifteePage/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
});