import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import App from './components/App';
import Overview from './components/Overview';
import Article from './components/Article';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import './index.css';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="view/:articleId" component={Article} />
      </Route>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
