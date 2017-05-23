import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'


class RouterMap extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/city' component={City}></Route>
          <Route path='/user' component={User}/>
          <Route path='/search/:type(/:keyword)' component={Search}/>
          <Route path='/detail/:id' component={Detail}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default RouterMap;