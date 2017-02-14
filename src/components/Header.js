import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Header = (props) => {
  return(
    <div className="row center indigo">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>I want #goodnews</h2>
    </div>
  );
};

export default Header;
