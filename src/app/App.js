import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import LandingPage from '../routes/LandingPage';
import RegistrationPage from '../routes/RegistrationPage';
import NewGifteePage from '../routes/NewGifteePage';
import NewEventPage from '../routes/NewEventPage';
import GiftsPage from '../routes/GiftsPage';
import MyProvider from '../contexts/context';
import Sidebar from '../components/Sidebar/Sidebar';
import LoginPage from '../routes/LoginPage';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <BrowserRouter>
          <div className="App">
            <header className="App-header"></header>
            <main className="App-main">
              <Route
                path='/'
                component={Sidebar}
              />
              <div className="page">
                <Route
                  exact
                  path={'/'}
                  component={LandingPage}
                />
                <Route
                  path={'/register'}
                  component={RegistrationPage}
                />
                <Route
                  path={'/login'}
                  component={LoginPage}
                />
                <Route
                  exact
                  path={'/giftees'}
                  component={NewGifteePage}
                />
                <Route
                  exact
                  path={'/events'}
                  component={NewEventPage}
                />
                <Route
                  exact
                  path={'/events/:eventId/gifts'}
                  component={GiftsPage}
                />
            </div>
            </main>
          </div>
        </BrowserRouter>
      </MyProvider>
      
    );
  }
}

export default App;
