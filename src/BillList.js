import React, { Component } from 'react';
import Bills from './Bills'

class BillList extends Component {
  state={
    introduced_date: "",
    number: "",
    short_title: "",
    sponsor_title: "",
    sponsor_name: "",
    sponsor_state: "",
    sponsor_party: "",
    house_passage: "",
    congressdotgov_url:"",
    gpo_pdf_uri:"",
    bills: []
  }

  componentDidMount() {
    fetch(` https://api.propublica.org/congress/v1/bills/search.json?query=immigration`, {
      headers:{
        ['x-api-key']:"C2LSxHiCuV8Cl7Y6cdxotBR17BfiyiCKhgoe4ijV"
      }
    })
      .then( res => res.json() )
      .then( data => {
        // console.log(data.results[0].members)
        let mems = data.results[0].bills.map(d => {
      return({
        introduced_date: d.introduced_date,
        number: d.number,
        short_title: d.short_title,
        sponsor_title: d.sponsor_title,
        sponsor_name: d.sponsor_name,
        sponsor_state: d.sponsor_state,
        sponsor_party: d.sponsor_party,
        house_passage: d.house_passage,
        congressdotgov_url: d.congressdotgov_url,
        gpo_pdf_uri:d.gpo_pdf_uri
      })
    })
      console.log(mems)
      this.setState(prevState => ({
        bills:mems
      }))
  })
  }


  render(){
    const showBills = this.state.bills.map((d, i) => {
      return <Bills bills={d} />
    })

    return(
    <>
      <h1>Bills</h1>
      <div>
        {showBills}
      </div>
    </>
    )
  }
}

export default BillList;
