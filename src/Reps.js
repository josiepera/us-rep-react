import React, { Component } from 'react';
// import RepItems from './RepItems'


class Reps extends Component {
  constructor(props){
    super(props)
    this.state={
      show: false
    }
    this.toggleInfo = this.toggleInfo.bind(this)
  }

  toggleInfo = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {

    const { item } = this.props

    return (
      <div>
        <ul>
          <li onClick={this.toggleInfo}>{this.props.members.firstName} {this.props.members.lastName}</li>

            {
            this.state.show &&
            <div>
              <div>{this.props.members.dob}</div>
              <div>{this.props.members.location}-{this.props.members.party}</div>
              <div>{this.props.members.twitter}</div>
              <div>{this.props.members.nextElection}</div>
            </div>
            }

        </ul>
      </div>
    );
  }
}



export default Reps
