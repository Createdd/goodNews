import React from 'react';

export default class ArticleDetail extends React.Component {
  render() {
    return (
      <div>
        <p>This is article number </p>
        {this.props.params.articleId}
      </div>
    );
  }
}
