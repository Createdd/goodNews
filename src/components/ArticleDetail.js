import React from 'react';

export default class ArticleDetail extends React.Component {
  render() {
    return (
      <div>
        <p>This is article number: {this.props.params.articleId}</p>
        {Object.keys(this.props.state.showArticle).map(key => (
          <p key={key}>{this.props.state.showArticle[key]}</p>

        ))}
      </div>
    );
  }
}
