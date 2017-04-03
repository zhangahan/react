import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Background-home/background-home';
import RightSide from './Background-home/right-side';
import RightSideTwo from './Background-home/right-side-two.js';
import ViewDetail from './Background-home/right-view-detail';
import Login from './login/login';
import SuperManger from './superManger/SuperManger';

import './index.css';

import { Router, Route, hashHistory ,IndexRoute} from 'react-router';
import{Provider}from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducer';
console.log(createStore);
let store=createStore(todoApp);

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={Login}/>
                <Route path="/student" component={Home}>
                    <IndexRoute component={RightSide}/>
                    <Route path="repos" component={RightSide}/>
                    <Route path="about" component={RightSideTwo}/>
                    <Route path="detail" component={ViewDetail}/>
                </Route>
                <Route path="/super" component={SuperManger}/>
            </Router>
        </Provider>
    ),
  document.getElementById('root')
);

