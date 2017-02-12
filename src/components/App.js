import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
//import Overview from './Overview';
import List from './List';
import Article from './Article';
import Infos from './Infos';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row center indigo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>I want #goodnews</h2>
        </div>
        <div className="row">
          <div className="col s4 green lighten-5"><List /></div>
          <div className="col s4 lime lighten-5"><Article /></div>
          <div className="col s4 orange lighten-5"><Infos /></div>
        </div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    );
  }
}
