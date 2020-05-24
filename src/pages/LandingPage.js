import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

import logo from '../images/DS3.png';
import logo2 from '../images/DS3NOBGBG.png';
import "./LandingPage.css";

const styles = ({
  divStyle: {
    fontSize: '25px',
    textAlign: "center",
    fontFamily: 'arial',
    color: "black"
  },

  divStyle2: {
    fontSize: '20px',
    textAlign: "center",
    color: "black"
  },

});

class LandingPage extends Component {


  state = {
    btnmsg: "Welcome",
    showLogo: true,
    redirectTo: "",
    eyeBalls: [],
    x: 0,
    y: 0,
    isMouseMove: true
  }

  // componentWillMount() {
  //   setInterval(this.handleShowLogo, 3000)
  // }

  handleShowLogo = () => {
    const newState = { ...this.state }
    newState.showLogo = !newState.showLogo
    this.setState(newState);
    console.log("mouse enter")
  };

  handleClick = () => {
    this.setState({
      redirectTo: "/HomePage",
    })
  }

  logMousePosition = e => {
    if (this.state.isMouseMove) {
      const newState = { ...this.state }
      newState.eyeBalls = this.state.eyeBalls
      console.log(newState.eyeBalls)
      newState.x = e.clientX * 100 / window.innerWidth + "%";
      newState.y = e.clientY * 100 / window.innerHeight + "%";
      for (let i = 0; i < 2; i++) {
        newState.eyeBalls[i].style.left = newState.x;
        newState.eyeBalls[i].style.top = newState.y;
        newState.eyeBalls[i].style.transform = "translate(-" + newState.x + ",-" + newState.y + ")";
      }
      // console.log(e)
      this.setState(newState);
      // this.setState({
      //     x: e.clientX,
      //     y: e.clientY
      // })
    }
  }

  componentDidMount() {
    if (this.state.isMouseMove) {
      const newState = { ...this.setState }
      newState.eyeBalls = document.getElementsByClassName("eyeball")
      this.setState(newState)
      window.addEventListener('mousemove', this.logMousePosition)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.logMousePosition)
    this.setState({
      isMouseMove: false,
    })
  }

  handleClick = () => {
    this.setState({
      isMouseMove: false,
      redirectTo: "/HomePage"
    })
  }

  render() {

    let hideLogo = {
      'display': "flex"
    };
    let hideLogo2 = {
      'display': "none"
    };
    if (!this.state.showLogo) {
      hideLogo = {
        'display': "none"
      };

      hideLogo2 = { 'display': "flex" };
    }
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }

    return (
      <div className="landingPageContainer">
        <div className="lanpagewrap">
          {/* LOGO START */}
          <div className="logocont">
            <div className="logocirclewrap1">
              <div className="logocirclewrap2" onMouseEnter={this.handleShowLogo} style={hideLogo} >
                <img className="logoimghome" src={logo} alt="logo" />

              </div>
            </div>
          </div>
          {/* LOGO ENDS */}

          {/* LOGO START */}
          <div className="logocont">
            <div className="logocirclewrap1">
              <div className="logocirclewrap3" onMouseLeave={this.handleShowLogo} style={hideLogo2} >
                <img className="logoimghome" src={logo2} alt="logo" />
              </div>
            </div>
          </div>
          {/* LOGO ENDS */}
          <br></br>

          <div className="eyes">
            <div className="eye">
              <div className="eyeball"></div>
            </div>
            <div className="eye">
              <div className="eyeball"></div>
            </div>
          </div>

          {/* APP DESCRIPTION STARTS */}
          <div className="descwrap1">
            <div className="descwrap2">
              <div style={styles.divStyle}>
                <p>Looking for Web Designs?</p>
              </div>

              <div style={styles.divStyle2}>
                <p>Sarmiento Dev | Design | Development</p>
              </div>
              <br></br>
            </div>
          </div>
          {/* APP DESCRIPTION ENDS */}
          {/* <Link to="/HomePage" className="linkLand"> */}
          <div className="loginsignupbtnhomewrap">
            <button onClick={this.handleClick} onMouseEnter={() => this.setState({ btnmsg: "Go Inside!" })} onMouseLeave={() => this.setState({ btnmsg: 'Welcome!' })} className="loginsignupbtnhome">
              {this.state.btnmsg}</button>
          </div>
          {/* </Link> */}

        </div>
      </div>
    )
  };
}
export default LandingPage