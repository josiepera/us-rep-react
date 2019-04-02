import React, { Component } from 'react';
import Bills from './Bills'
import BillForm from './BillForm'
import Header from './Header'

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
    bills: [],
    currentPage: 1,
    billsPerPage: 10
  }

  handleClick(event){
    this.setState({
      currentPage: Number(event.target.id)
    });
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

    const { bills, currentPage, billsPerPage } = this.state;

    const indexOfLastBill = currentPage * billsPerPage;
    const indexOfFirstBill = indexOfLastBill - billsPerPage;
    const currentBills = bills.slice(indexOfFirstBill, indexOfLastBill);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(bills.length / 10); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={(e) => this.handleClick(e)}
        >
          {number}
        </li>
      );
    });


    return(
    <div className="bills">
      <Header/>
      <h1>Bills Search</h1>
      <BillForm
      getKeyWord={this.getKeyWord}
      />
      <div>
        {showBills}
      </div>
      <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
    </div>
    )
  }
}

export default BillList;
