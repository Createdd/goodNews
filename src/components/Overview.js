import React from 'react';

import Data from '../data/Articles';

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
      articlesState: {},
      showArticle: {}
    }
  }
  addArticle(article) {
    const articles = {...this.state.articlesState};
    const timestamp = Date.now();
    articles[`article-${timestamp}`] = article
    this.setState({articlesState: articles})
  }
  loadArticles() {
    this.setState({
      articlesState: Data
    })
  }
  showArticle(key) {
    let show = key;
    console.info(show);
    this.setState({
      showArticle:  show
    })
  }
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col s4 green lighten-5"><List state={this.state} showArticle={this.showArticle}/></div>
          <div className="col s4 lime lighten-5">
            <ArticleDetail params={this.props.params}/>
            <button onClick={e => this.loadArticles()} className="btn">Load that shit</button>
          </div>
          <div className="col s4 orange lighten-5"><NewStory addArticle={this.addArticle} /></div>
        </div>
      </div>
    );
  }
}
