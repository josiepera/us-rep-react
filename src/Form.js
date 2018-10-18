import React, { Component } from 'react';


class Form extends Component {

  render() {
    console.log(this.props.searchQuery);
    return (
      <div className="form">
        <input
          type="text"
          value={this.props.searchQuery}
          onChange={this.props.handleChange}
          />
        <button onClick={this.props.handleClick}>Send</button>
      </div>
    );
  }
}

export default Form

