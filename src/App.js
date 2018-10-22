import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Reps from './Reps'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: "",
      firstName: "",
      lastName:"",
      party: "",
      twitter: "",
      facebook: "",
      nextElection: "",
      id: "",
      district: "",
      image: "",
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
      let members = data.results.map(d => {
        return({
          firstName: d.first_name,
          lastName: d.last_name,
          party:d.party,
          twitter: d.twitter_id,
          facebook: d.facebook_account,
          nextElection: d.next_election,
          district: d.district,
          id: d.id
        })
      })
      this.setState(prevState => ({
        members
      }))
    }

  //  getImage() {
  //   let url = (`https://theunitedstates.io/images/congress/original/${this.state.id}.jpg`)
  //   fetch(url)
  //     .then( res => res.json() )
  //     .then( data => {
  //       console.log(data)
  //       this.setState(prevState => ({
  //         images: data
  //       }))
  //     })
  // }

  render(){
    const showMembers = this.state.members.map((d, i) => {
      return <Reps members={d} />
    })

      return (
        <div className= "page">
            <div className= "type">
              <span>Who</span>
              <span>Reps</span>
              <span>Me</span>
            </div>
            <Form getStateName={this.getStateName} />
            <div getStateName={this.getStateName} className="members">
            {showMembers}
            </div>
        </div>
    )
  }
}

export default App;
