import React from 'react';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.displayArticle = this.displayArticle.bind(this);
  }
  displayArticle() {
    let index = this.props.index +1;
    console.info(index);
  }
  render() {
    return (
      <div onClick={this.displayArticle}>
        {this.props.index +1}<br/>
        <b>{this.props.article.title}</b><br/>
        {this.props.article.author}<br/>
      </div>
    );
  }
}
