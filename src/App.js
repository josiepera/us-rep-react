import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Form'
import RepList from './RepList'
import BillList from './BillList'
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import ScrollTo from 'react-scroll-into-view'


class App extends Component {

  render(){
    return(
        <Router>
          <Switch>
              <Route exact path="/" component={RepList} />
              <Route exact path="/bills" component={BillList} />
          </Switch>
        </Router>
    )
  }
}

export default App;
