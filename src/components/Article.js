import React from 'react';

export default class Article extends React.Component {
  render() {
    return (
      <div>
        <b>{this.props.article.title}</b><br />{this.props.article.author}<br />
      </div>
    );
  }
}
