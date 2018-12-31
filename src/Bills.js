import React, { Component } from 'react';

class Bills extends Component {

  render(){
    return(
    <>
      <h4>Date Introduced {this.props.bills.introduced_date}</h4>
      <p>{this.props.bills.number}</p>

      <a href= { this.props.bills.congressdotgov_url } target="_blank" className="congress-url">
        <p>{this.props.bills.short_title}</p>
      </a>

      <div className="pdf">
      <a href={this.props.bills.gpo_pdf_uri} target="_blank" className="bill-pdf">
        PDF
      </a>
      </div>

      <div className="congressperson">
        <p>{this.props.bills.sponsor_title}</p>
        <p>{this.props.bills.sponsor_name}</p>
      </div>

      <p>{this.props.bills.sponsor_state}</p>
      <p>({this.props.bills.sponsor_party})</p>
      <p>House Passage {this.props.bills.house_passage}</p>
    </>
    )
  }
}

export default Bills
