import React from 'react';

import Data from '../data/Articles';
import base from '../base';

import List from './List';
import ArticleDetail from './ArticleDetail';
import NewStory from './NewStory';
import Header from './Header';

export default class Overview extends React.Component {
  constructor() {
    super();
    this.addArticle = this.addArticle.bind(this);
    this.showArticle = this.showArticle.bind(this);
    this.state = {
      articlesState: Data,
      showArticle: {}
    };
  }
  componentWillMount() {
    this.ref = base.syncState('articles', {
      context: this,
      state: 'articlesState'
    });
    const localStorageRef = localStorage.getItem(
      `showArticle-${this.props.params}`
    );
    if (localStorageRef) {
      this.setState({
        showArticle: JSON.parse(localStorageRef)
      });
    }
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      `showArticle-${this.props.params}`,
      JSON.stringify(nextState.showArticle)
    );
  }
  addArticle(article) {
    const articles = { ...this.state.articlesState };
    const size = Object.keys(articles).map(key => articles.hasOwnProperty(key)).length
    articles[size] = article;
    this.setState({ articlesState: articles });
  }
  showArticle(key) {
    let show = key;
    this.setState({
      showArticle: show
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col s4 green lighten-5">
            <List state={this.state} showArticle={this.showArticle} />
          </div>
          <div className="col s4 lime lighten-5">
            <ArticleDetail params={this.props.params} state={this.state} />
          </div>
          <div className="col s4 orange lighten-5">
            <NewStory addArticle={this.addArticle} />
          </div>
        </div>
      </div>
    );
  }
}
