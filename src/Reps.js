import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

class Reps extends Component {
  constructor(props){
    super(props)
    this.state={
      rep: "",
      title: "",
      mems: [],
      show: false
    }
    this.toggleInfo = this.toggleInfo.bind(this)
  }

  toggleInfo = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

componentDidMount() {
    fetch(`https://api.propublica.org/congress/v1/members/${this.props.members.id}/bills/introduced.json`, {
      headers:{
        ['x-api-key']:"C2LSxHiCuV8Cl7Y6cdxotBR17BfiyiCKhgoe4ijV"
      }
    })
      .then( res => res.json() )
      .then( data => {
        // console.log(data.results[0].members)
        let mems = data.results[0].bills.map(d => {
      return({
      rep: d.sponsor_name,
      title: d.short_title

      })
    })
      // console.log(mems)
      this.setState(prevState => ({
        mems
      }))
  })
  }


  render() {
    return (
      <div>

        <div className="memberContainer" onClick={this.toggleInfo}>

            <div className = "card">

               <img src={`https://theunitedstates.io/images/congress/225x275/${this.props.members.id}.jpg`} alt="congressional-Image"/>
               <h2>{this.props.members.firstName} {this.props.members.lastName}</h2>
               <p>District-{this.props.members.district}({this.props.members.party})</p>               <div className="socialBtn">
               <a href= { `https://twitter.com/${this.props.members.twitter}` } className="twitter smGlobalBtn"></a>
               <a href= { `https://facebook.com/${this.props.members.facebook}` } className="facebook smGlobalBtn"></a>
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
                      <a href= { `https://twitter.com/${this.props.members.twitter}` } className="twitter smGlobalBtn"></a>
                      <a href= { `https://facebook.com/${this.props.members.facebook}` } className="facebook smGlobalBtn"></a>
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
