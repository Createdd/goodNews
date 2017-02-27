import React from 'react';

import Articles from '../data/Articles';

import Article from './Article';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.displayArticle = this.displayArticle.bind(this);
  }
  displayArticle(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        <h4>List of articles:</h4>
        <ol>
          {Articles.map((item, key) => (
            <li className="hoverable card-panel" key={key}>
              <Article article={item} index={key} onClick={this.displayArticle}/>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
