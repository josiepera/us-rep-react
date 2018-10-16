import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: [],
      lastNAme:[],
      dob: "",
      location: "",
      party: "",
      nextElection: "",
      twitter: ""
    }
  }

  componentDidMount() {
    fetch(`https://api.propublica.org/congress/v1/115/house/members.json`, {
      headers:{
        ['x-api-key']:"C2LSxHiCuV8Cl7Y6cdxotBR17BfiyiCKhgoe4ijV"
      }
    })
      .then( res => res.json() )
      .then( data => {
        // console.log(data.results[0].members)
        let mems = data.results[0].members.map(d => {
      return({
      firstName: d.first_name,
      lastName: d.last_name,
      dob: d.date_of_birth,
      location:d.state,
      party:d.party,
      nextElection: d.next_election,
      twitter: d.twitter_account
      })
    })
      console.log(mems)
  })
  }



  render(){
    // console.log(this.state.results)
    return (
      <div>
        <h1>Whomst my Rep</h1>
        <p>{this.componentDidMount()}</p>
        <Form />
      </div>
    )
  }
}

export default App;
