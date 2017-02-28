import React from 'react';

import Article from './Article';

export default class List extends React.Component {
  render() {
    return (
      <div>
        <h4>List of articles:</h4>
        <ol>
          {Object.keys(this.props.state.articlesState).map((key) => (
            <li className="hoverable card-panel" key={key}>
              <Article index={key} details={this.props.state.articlesState[key]}/>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
