import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Reps from './Reps'
import Flip from 'react-reveal/Flip';
import ScrollTo from 'react-scroll-into-view';
import { Link } from 'react-router-dom';


class RepList extends Component {
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
      members: [],
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

  render(){
    const showMembers = this.state.members.map((d, i) => {
      return <Reps members={d} />
    })

      return (
      <div>
        <div className= "page">
            <div className="bgc-pic"></div>
            <Flip>
            <div className= "type">
              <span>Who</span>
              <span>Reps</span>
              <span>Me</span>
            </div>
            </Flip>
          <div className="nav-buttons">
            <ScrollTo selector=".second">
              <button className="enter">Find Rep by State</button>
            </ScrollTo>
            <Link to='/bills'><button className="enter">Search Upcoming Bills</button></Link>
          </div>
        </div>

        <div className="second">
            <Form
            getStateName={this.getStateName}
            />
                <div className="members">
                {showMembers}
                </div>
        </div>
      </div>
    )
  }
}

export default RepList;
