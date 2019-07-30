import React from 'react';

import { Route, Switch } from 'react-router-dom'

import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header'
import './App.css';
import YourListings from './components/YourListings'
import AddListing from './components/AddListing';
import UpdateListing from './components/UpdateListing';
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

function App() {
  return (
    <div className="App">
      <div>

        <Header />

          {/* <Register /> */}
          {/* <Login /> */}
        
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames="fade"
              >
                      <Switch location={location}>
                        <Route path={`/your-listings`} component={YourListings} />
                        <Route path={`/add-listing`} component={AddListing} />
                        <Route path={`/update-listing`} component={UpdateListing} />
                        <Route path={`/register`} component={Register} />
                        <Route exact path={`/`} component={Login} />
                        {/* <Route path={`/logout`} component={Logout} /> */}
                        <Route path={`/privacy`} component={PrivacyPolicy} />
                        <Route path={`/terms-and-conditions`} component={TermsAndConditions} />
                      </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
