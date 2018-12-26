import React, { Component } from 'react';

class BillList extends Component {
  state={
    legislative_day: "",
    description: ""
  }

  componentDidMount() {
    fetch(`https://api.propublica.org/congress/v1/bills/upcoming/house.json`, {
      headers:{
        ['x-api-key']:"C2LSxHiCuV8Cl7Y6cdxotBR17BfiyiCKhgoe4ijV"
      }
    })
      .then( res => res.json() )
      .then( data => {
        // console.log(data.results[0].members)
        let mems = data.results[0].bills.map(d => {
      return({
        legislative_day: d.legislative_day,
        description: d.description
      })
    })
      console.log(mems)
  })
  }
  render(){
    return(
      <h1>Bills</h1>
    )
  }
}

export default BillList;
