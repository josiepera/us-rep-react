import React from 'react';

const BillForm = (props) => {

  return (
      <form onSubmit={props.getKeyword} className="formContainer">
        <input type="text" name="keyword" placeholder="Search" />
        <button>Submit</button>
      </form>
    )
}

export default BillForm;
