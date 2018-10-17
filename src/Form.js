import React, { Component } from 'react';


class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      repFilter: ""
    }
  }

  // handleChange = (e) => {
  //   this.setState({
  //     repFilter: e.target.value
  //   })
  //   this.props.onChange(event.target.value)
  // }

  render() {
    console.log(this.props.searchQuery);

   let filterRep = this.state.members.filter( (showMembers) =>{
   return data.results[0].members.state.indexOf(this.state.searchQuery) !== -1
   })

    return (
      <div>
        <input
          type="text"
          value={this.props.searchQuery}
          onChange={this.props.handleChange} />
        <button>SEARCH</button>
      </div>
    );
  }
}


export default Form

