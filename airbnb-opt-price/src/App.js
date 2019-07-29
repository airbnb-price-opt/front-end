import React from 'react';

import { Route, Switch } from 'react-router-dom'

import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header'
import YourListings from './components/YourListings'
// import Listings from './components/Listings'
import './App.css';
import AddListing from './components/AddListing';
import UpdateListing from './components/UpdateListing';
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions'

function App() {
  return (
    <div className="App">
      <div>

        <Header />

          {/* <Register /> */}
          {/* <Login /> */}
        

        <Switch>
          <Route path={`/your-listings`} component={YourListings} />
          <Route path={`/add-listing`} component={AddListing} />
          <Route path={`/update-listing`} component={UpdateListing} />
          <Route path={`/register`} component={Register} />
          <Route path={`/login`} component={Login} />
          {/* <Route path={`/logout`} component={Logout} /> */}
          <Route path={`/privacy`} component={PrivacyPolicy} />
          <Route path={`/terms-and-conditions`} component={TermsAndConditions} />
        </Switch>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
