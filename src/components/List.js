import React from 'react';

export default class List extends React.Component {
  render() {
    return (
      <div>
        <h4>List of articles:</h4>
        <ol>
          {this.props.articles.map((item, key) => (
            <li className="hoverable card-panel" key={key}>
              <b>{item.title}</b><br />{item.author}<br />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
