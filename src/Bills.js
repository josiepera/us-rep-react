import React, { Component } from 'react';

class Bills extends Component {

  render(){
    return(
    <div className="bills-container">

      <div className="bill-top">
        <h5>{this.props.bills.number}</h5>
        <a href={this.props.bills.gpo_pdf_uri} target="_blank" className="bill-pdf">
          PDF
        </a>
      </div>

      <a href= { this.props.bills.congressdotgov_url } target="_blank" className="congress-url">
        <p className="bill-title">{this.props.bills.short_title}</p>
      </a>

      <div className="congressperson">
        <p>{this.props.bills.sponsor_title}</p>
        <p>{this.props.bills.sponsor_name} </p>
        <p>({this.props.bills.sponsor_party})-</p>
        <p>{this.props.bills.sponsor_state}</p>
      </div>

      <p>Date Introduced {this.props.bills.introduced_date}</p>
      <p className="house-passage">House Passage {this.props.bills.house_passage}</p>
    </div>
    )
  }
}

export default Bills
