import React from 'react';

const BillForm = (props) => {

  return (
      <form onSubmit={props.getKeyWord} className="billFormContainer">
        <input type="text" name="keyWord" placeholder="Search" />
        <button>Submit</button>
      </form>
    )
}

export default BillForm;
