import React from 'react';

import Article from './Article';

export default class List extends React.Component {
  render() {
    return (
      <div>
        <h4>List of articles:</h4>
        <ul>
          {Object.keys(this.props.state.articlesState).map(key => (
            <li className="hoverable card-panel" key={key}>
              <Article
                index={key}
                details={this.props.state.articlesState[key]}
                show={this.props.state.showArticle[key]}
                showArticle={this.props.showArticle}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
