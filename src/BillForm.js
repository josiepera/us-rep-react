import React from 'react';
import Search from "@material-ui/icons/Search";

const BillForm = (props) => {

  return (
      <form onSubmit={props.getKeyWord} className="billFormContainer">
        <input type="text" name="keyWord" placeholder="Search" />
        <button><Search /></button>
      </form>
    )
}

export default BillForm;
