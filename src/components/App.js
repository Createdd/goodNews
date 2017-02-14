import React, { Component } from 'react';


//import Overview from './Overview';
import Header from './Header';
import List from './List';
import Article from './Article';
import Infos from './Infos';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col s4 green lighten-5"><List /></div>
          <div className="col s4 lime lighten-5"><Article /></div>
          <div className="col s4 orange lighten-5"><Infos /></div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
