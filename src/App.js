import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Form from './Form'
import Reps from './Reps'
// import RepItems from './RepItems'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: "",
      firstName: "",
      lastName:"",
      location: "",
      party: "",
      dob: "",
      twitter: "",
      nextElection: "",
      members: []
  }
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.searchHandler = this.searchHandler.bind(this);
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
          location:d.state,
          party:d.party,
          dob:d.date_of_birth,
          twitter: d.twitter_account,
          nextElection: d.next_election
        })
      })
      // console.log(mems)
      this.setState(prevState => ({
        members:mems
      }))
    })
  }

// searchHandler(event){
//   this.setState = ({location:event.target.value})
// }

handleChange(e){
    this.setState({
      searchQuery: e.target.value

    });
  }

  // {showMembers}

  render(){
    // console.log(this.state.results)
    const showMembers = this.state.members.map((d, i) => {
      return <Reps members={d}/>
    })

           //  searchQuery={this.state.searchQuery}


    return (
      <div className= "page">
        <h1>Whomst my Rep</h1>
        <form>
          <input
          type="text"
          // handleChange={this.handleChange}
          />
          <button>SEARCH</button>
        </form>
        <div className="members">
           {showMembers}
        </div>
      </div>
    )
  }
}

export default App;
