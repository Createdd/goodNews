import React from 'react';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.displayArticle = this.displayArticle.bind(this);
  }
  displayArticle(e) {
    let index = this.props.index;
    this.context.router.push(`/view/${index}`);
  }
  render() {
    return (
      <div onClick={e => this.displayArticle(e)}>
        {this.props.index}<br/>
      <b>{this.props.details.title}</b><br/>
        {this.props.details.author}<br/>
      </div>
    );
  }
}

Article.contextTypes = {
  router: React.PropTypes.object
}
