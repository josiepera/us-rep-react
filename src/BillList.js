import React, { Component } from 'react';
import Bills from './Bills'
import BillForm from './BillForm'

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

  getKeyWord = async (e) => {
    e.preventDefault()
    const keyWord = e.target.elements.keyWord.value
    const apiCall = await fetch(`https://api.propublica.org/congress/v1/bills/search.json?query=${keyWord}`, {
      headers:{
        ['x-api-key']:"C2LSxHiCuV8Cl7Y6cdxotBR17BfiyiCKhgoe4ijV"
      }
    })
    const data = await apiCall.json()
      let  bills= data.results[0].bills.map(d => {
        return({
          introduced_date: d.introduced_date,
          number: d.number,
          short_title: d.short_title,
          sponsor_title: d.sponsor_title,
          sponsor_name: d.sponsor_name,
          sponsor_state: d.sponsor_state,
          sponsor_party: d.sponsor_party,
          house_passage: d.house_passage,
          congressdotgov_url:d.congressdotgov_url,
          gpo_pdf_uri:d.gpo_pdf_uri
        })
      })
      // console.log(bills)
      this.setState(prevState => ({
        bills
      }))
    }


  render(){
    const showBills = this.state.bills.map((d, i) => {
      return <Bills bills={d} />
    })

    return(
    <div className="bills">
      <h1>Bills</h1>
      <BillForm
      getKeyWord={this.getKeyWord}
      />
      <div>
        {showBills}
      </div>
    </div>
    )
  }
}

export default BillList;
