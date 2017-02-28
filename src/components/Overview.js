import React from 'react';

import List from './List';
import ArticleDetail from './ArticleDetail';
import NewStory from './NewStory';

import Header from './Header';

export default class Overview extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col s4 green lighten-5"><List /></div>
          <div className="col s4 lime lighten-5">
            <ArticleDetail params={this.props.params} test='test'/>
          </div>
          <div className="col s4 orange lighten-5"><NewStory /></div>
        </div>
      </div>
    );
  }
}
