import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

class Reps extends Component {
  constructor(props){
    super(props)
    this.state={
      show: false
    }
  }

  toggleInfo = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }



  render() {
    return (
      <div>

        <div className="memberContainer" onClick={this.toggleInfo.bind(this)}>

            <div className = "card">

               <img src={`https://theunitedstates.io/images/congress/225x275/${this.props.members.id}.jpg`} alt="congressional-Image"/>
               <h2>{this.props.members.firstName} {this.props.members.lastName}</h2>
               <p>District-{this.props.members.district}({this.props.members.party})</p>
               <div className="socialBtn">
                  <a href= { `https://twitter.com/${this.props.members.twitter}` } target="_blank" className="twitter smGlobalBtn"></a>
                  <a href= { `https://facebook.com/${this.props.members.facebook}` } target="_blank" className="facebook smGlobalBtn"></a>
               </div>

            </div>

             {
              this.state.show &&
              <Zoom>
                <div className="content">
                    <img src={`https://theunitedstates.io/images/congress/original/${this.props.members.id}.jpg`} alt="congressional-Image"/>
                  <div className="below">
                    <h2>{this.props.members.firstName} {this.props.members.lastName}</h2>
                    <p>District-{this.props.members.district}({this.props.members.party})</p>
                    <div className = "test">{this.state.title}</div>
                    <div className="socialBtn">
                      <a href= { `https://twitter.com/${this.props.members.twitter}` } target="_blank" className="twitter smGlobalBtn"></a>
                      <a href= { `https://facebook.com/${this.props.members.facebook}` } target="_blank" className="facebook smGlobalBtn"></a>
                    </div>
                  </div>
                </div>
              </Zoom>
            }
        </div>

      </div>
    );
}

}





export default Reps
