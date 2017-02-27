import React from 'react';

import Articles from '../data/Articles';

import Article from './Article';

export default class List extends React.Component {

  render() {
    return (
      <div>
        <h4>List of articles:</h4>
        <ol>
          {Articles.map((item, key) => (
            <li className="hoverable card-panel" key={key}>
              <Article article={item} index={key}/>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
