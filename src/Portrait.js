import React, { Component } from 'react';

class Portrait extends Component {

  getImage() {
    let url = `https://theunitedstates.io/images/congress/original/${this.props.members.id.jpg}`
    fetch(url)
      .then( res => res.json() )
      .then( data => {
        console.log(data)
        this.setState(prevState => ({
          characters: data
        }))
      })
  }

  render(){


    return(
      <div>
        image={this.getImage}
      </div>
      )
  }
}

export default Portrait
