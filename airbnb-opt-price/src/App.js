import React from 'react';
import logo from './logo.svg';
import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import AddListing from './components/AddListing'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register />
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
        
      </header>
      <AddListing />
    </div>
  );
}

export default App;
