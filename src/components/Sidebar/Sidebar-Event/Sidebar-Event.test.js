import React from 'react';
import ReactDOM from 'react-dom';
import SidebarEvent from './Sidebar-Event';

describe('<RegistrationForm />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <SidebarEvent event={{id:''}}/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });