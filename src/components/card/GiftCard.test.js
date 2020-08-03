import React from 'react';
import ReactDOM from 'react-dom';
import GiftCard from './GiftCard';

describe('<RegistrationForm />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <GiftCard gift={{idea:'', notes:'', id:''}}/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });