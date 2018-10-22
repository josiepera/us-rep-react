import React, { Component } from 'react';

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
    return (
      <div>
        <div className="memberContainer" onClick={this.toggleInfo}>

          <h2 className="name" onClick={this.toggleInfo}>{this.props.members.firstName} {this.props.members.lastName}</h2>
            {
              this.state.show &&
              <div className="content">
                <img src="https://foreignpolicymag.files.wordpress.com/2017/10/gettyimages-83951850.jpg?w=960" alt="" />
              <div className="below">
                <h2>{this.props.members.firstName} {this.props.members.lastName}</h2>
                <p>District-{this.props.members.district}({this.props.members.party})</p>
                <div className="socialBtn">
                  <a href= { `https://twitter.com/${this.props.members.twitter}` } className="twitter smGlobalBtn"></a>
                  <a href= { `https://facebook.com/${this.props.members.facebook}` } className="facebook smGlobalBtn"></a>
                </div>
              </div>
              </div>
            }
        </div>
      </div>
    );
}

}





export default Reps
