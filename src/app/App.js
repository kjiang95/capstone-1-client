import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LandingPage from '../routes/LandingPage';
import RegistrationPage from '../routes/RegistrationPage';
import NewGifteePage from '../routes/NewGifteePage';
import NewEventPage from '../routes/NewEventPage';
import GiftsPage from '../routes/GiftsPage';
import MyProvider from '../contexts/context';
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
                <PublicOnlyRoute
                  path={'/register'}
                  component={RegistrationPage}
                />
                <PublicOnlyRoute
                  path={'/login'}
                  component={LoginPage}
                />
                <PrivateRoute
                  exact
                  path={'/giftees'}
                  component={NewGifteePage}
                />
                <PrivateRoute
                  exact
                  path={'/events'}
                  component={NewEventPage}
                />
                <PrivateRoute
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
