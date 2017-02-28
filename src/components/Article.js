import React from 'react';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.displayArticle = this.displayArticle.bind(this);
  }
  displayArticle(e) {
    let index = this.props.index +1;
    this.context.router.push(`/view/${index}`);
  }
  render() {
    return (
      <div onClick={e => this.displayArticle(e)}>
        {this.props.index +1}<br/>
        <b>{this.props.article.title}</b><br/>
        {this.props.article.author}<br/>
      </div>
    );
  }
}

Article.contextTypes = {
  router: React.PropTypes.object
}
