import React from 'react';

import { Route, Switch } from 'react-router-dom'

import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header'
// import Listings from './components/Listings'
import './App.css';
import AddListing from './components/AddListing';
import UpdateListing from './components/UpdateListing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        {/* <Register /> */}
        {/* <Login /> */}
      </header>

      <Switch>
        {/* <Route path={`/your-listings`} component={Listings} /> */}
        <Route path={`/add-listing`} component={AddListing} />
        <Route path={`/update-listing`} component={UpdateListing} />
        <Route path={`/register`} component={Register} />
        <Route path={`/login`} component={Login} />
        {/* <Route path={`/logout`} component={Logout} /> */}
      </Switch>
    </div>
  );
}

export default App;
