import React from 'react';

const Form = (props) => {

  return (
      <form onSubmit={props.getStateName} className="formContainer">
        <input type="text" name="stateName" placeholder="State Abreviation" />
        <button>Submit</button>
      </form>
    )
}

export default Form;
