import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router';
import '../App.css';

const Header = props => {
  return (
    <Link to="/">
      <div className="row center indigo">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>I want #goodnews</h2>
      </div>
    </Link>
  );
};

export default Header;
