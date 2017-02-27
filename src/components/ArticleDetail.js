import React from 'react';

export default class ArticleDetail extends React.Component {
  // constructor(props) {
  //   super(props);
  //   params = {this.props.params}
  // }
  render() {
    return (
      <div>
        <p>This is article number </p>
        {this.props.params.articleId}
      </div>
    );
  }
}
