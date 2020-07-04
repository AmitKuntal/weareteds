import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home';
import CreatePost from './createpost';


function App(props) {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/index" exact component={Home}/>
      <Route path="/create/post" exact component={CreatePost}/>
    </Router>
  );
}

export default (App);
