import React from 'react';

import List from './List';
import Article from './Article';
import Infos from './Infos';

export default class Overview extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s4 green lighten-5"><List /></div>
        <div className="col s4 lime lighten-5"><Article /></div>
        <div className="col s4 orange lighten-5"><Infos /></div>
      </div>
    );
  }
}
