import React from 'react';

export default class List extends React.Component {
  render() {
    return (
      <ol>
        {this.props.articles.map((item, key) => <li key={key}><b>{item.title}</b><br/>{item.author}{console.log(item)}</li>)}
      </ol>
    );
  }
}
