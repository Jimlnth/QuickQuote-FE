import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Login from './components/Login.jsx';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/">
			<IndexRoute component={Login}/>
		</Route>
	</Router>
), document.getElementById('app'));