import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Overview from './components/Overview';
import Article from './components/Article';
import NotFound from './components/NotFound';

import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import './index.css';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Overview} />
        <Route path="view/:articleId" component={Article} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
