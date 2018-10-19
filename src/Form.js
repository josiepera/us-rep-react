import React, { Component } from 'react';


const Form = (props) => {

  return (
      <form onSubmit={props.getStateName} >
        <input type="text" name="stateName" placeholder="State Abreviation" />
        <button>Submit</button>
      </form>
    )
}

export default Form;
