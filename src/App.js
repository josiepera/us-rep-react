import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RepList from './RepList'
import BillList from './BillList'


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
