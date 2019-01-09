import React from 'react';
import Search from "@material-ui/icons/Search";

const BillForm = (props) => {

  return (
    <div className="billform">
      <img className="logo-img" src="https://i.imgur.com/B4zzhgs.png" alt="logo"/>
      <form onSubmit={props.getKeyWord} className="billFormContainer">
        <input type="text" name="keyWord" placeholder="Search" />
        <button><Search /></button>
      </form>
    </div>
    )
}

export default BillForm;
