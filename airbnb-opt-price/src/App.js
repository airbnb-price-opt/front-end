import React from 'react';
import logo from './logo.svg';
import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import YourListings from './components/YourListings'

function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <YourListings/>
    </div>
  );
}

export default App;
