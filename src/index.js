import React from 'react';
import ReactDOM from 'react-dom';

import Overview from './components/Overview';
import ArticleDetail from './components/ArticleDetail';
import NotFound from './components/NotFound';

import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import './index.css';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Overview}>
        <IndexRoute component={ArticleDetail} />
        <Route path="view/:articleId" component={ArticleDetail}/>
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
