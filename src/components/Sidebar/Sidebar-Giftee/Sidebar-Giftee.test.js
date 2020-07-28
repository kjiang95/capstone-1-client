import React from 'react';
import ReactDOM from 'react-dom';
import SidebarGiftee from './Sidebar-Giftee';

describe('<RegistrationForm />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <SidebarGiftee giftee={{id:''}}/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });