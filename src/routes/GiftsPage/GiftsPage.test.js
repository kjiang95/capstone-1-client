import React from 'react';
import ReactDOM from 'react-dom';
import GiftsPage from './GiftsPage';

describe('<RegistrationForm />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <GiftsPage/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
});