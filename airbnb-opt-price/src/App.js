import React, {useState, useEffect} from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'

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

  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(_ =>
    {
      localStorage.getItem('token') ? setLoggedIn(true) : setLoggedIn(false)
    }, [])

  return (
    <div className="App">
      <div>

        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route path={`/your-listings`}
                  render={props =>
                    localStorage.getItem("token") ? (
                      <YourListings {...props} />
                    ) : (
                      <Redirect to="/" />
                    )
                  }
                  />
                  <Route path={`/add-listing`}
                  render={props =>
                    localStorage.getItem("token") ? (
                      <AddListing {...props} />
                    ) : (
                      <Redirect to="/" />
                    )
                  }
                  />
                  <Route path={`/update-listing`}
                  render={props =>
                    localStorage.getItem("token") ? (
                      <UpdateListing {...props} />
                    ) : (
                      <Redirect to="/" />
                    )
                  }
                  />
                  <Route path={`/register`} component={Register} />
                  <Route exact path={`/`}
                  render={props =>
                    localStorage.getItem("token") ? (
                      <Redirect to="/your-listings" {...props} />
                    ) : (
                      <Login {...props} setLoggedIn={setLoggedIn} />
                    )
                  }
                  />
                  <Route path={`/privacy`} component={PrivacyPolicy} />
                  <Route path={`/terms-and-conditions`} component={TermsAndConditions} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
      </div>

      <Footer loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    </div>
  );
}

export default App;
