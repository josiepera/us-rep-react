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
  console.log("Outlaw Josie")
  render() {

    const { item } = this.props

    return (
      <div>
        <div className="member-container" onClick={this.toggleInfo}>
          <div className="name" onClick={this.toggleInfo}>{this.props.members.firstName} {this.props.members.lastName}</div>

            {
            this.state.show &&
            <div>
              <div>{this.props.members.dob}</div>
              <div>{this.props.members.party}</div>
              <div>{this.props.members.twitter}</div>
              <div></div>
            </div>
            }

        </div>
      </div>
    );

}

}





export default Reps
