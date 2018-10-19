import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Reps from './Reps'




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
  }

  getStateName = async (e) => {
    e.preventDefault()
    const stateName = e.target.elements.stateName.value
    const apiCall = await fetch(`https://api.propublica.org/congress/v1/members/house/${stateName}/current.json`, {
      headers:{
        ['x-api-key']:"C2LSxHiCuV8Cl7Y6cdxotBR17BfiyiCKhgoe4ijV"
      }
    })

    const data = await apiCall.json()
      console.log(data)

      let members = data.results.map(d => {
        return({
          firstName: d.first_name,
          lastName: d.last_name,
          party:d.party,
          twitter: d.twitter_id,
          nextElection: d.next_election
        })
      })
      console.log(members)
      this.setState(prevState => ({
        members
      }))



    }

  render(){

    // console.log(this.state.searchQuery)
    const showMembers = this.state.members.map((d, i) => {
      return <Reps members={d} />
    })

    return (
      <div>
        <body>
        <div className= "page">

            <div className= "type">
              <span>Who</span>
              <span>Reps</span>
              <span>Me</span>
            </div>

            <Form getStateName={this.getStateName} />

          <div className="members">
           {showMembers}
          </div>
        </div>
      </body>
      </div>
    )
  }
}

export default App;
