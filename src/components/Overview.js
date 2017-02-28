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
    this.state = {
      articlesState: {},
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
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col s4 green lighten-5"><List state={this.state}/></div>
          <div className="col s4 lime lighten-5">
            <ArticleDetail params={this.props.params} test='test'/>
            <button onClick={e => this.loadArticles()} className="btn">Load that shit</button>
          </div>
          <div className="col s4 orange lighten-5"><NewStory addArticle={this.addArticle} /></div>
        </div>
      </div>
    );
  }
}
