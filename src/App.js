import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Reps from './Reps'
// import RepItems from './RepItems'


class App extends Component {
  constructor() {
    super()
    this.state = {
      searchQuery: "",
      firstName: "",
      lastName:"",
      party: "",
      twitter: "",
      nextElection: "",
      members: []
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log(this.state.searchQuery)
    fetch(`https://api.propublica.org/congress/v1/members/house/NY/current.json`, {
      headers:{
        ['x-api-key']:"C2LSxHiCuV8Cl7Y6cdxotBR17BfiyiCKhgoe4ijV"
      }
    })
      .then( res => res.json() )
      .then( data => {
        // console.log(data.results)
        let mems = data.results.map(d => {
          return({
          firstName: d.first_name,
          lastName: d.last_name,
          party:d.party,
          twitter: d.twitter_id,
          nextElection: d.next_election
        })
      })
      this.setState(prevState => ({
        members:mems
      }))
    })
  }

 handleChange(e){
    this.setState({
      searchQuery: e.target.value
    });
  }

  render(){
    console.log(this.state.searchQuery)
    const showMembers = this.state.members.map((d, i) => {
      return <Reps members={d}/>
    })

    return (
      <div className= "page">
        <h1>Whomst my Rep</h1>

        <Form
          searchQuery={this.state.searchQuery}
          handleChange={this.handleChange}
          handleClick={this.handleClick}/>

        <div className="members">
           {showMembers}
        </div>
      </div>
    )
  }
}

export default App;
