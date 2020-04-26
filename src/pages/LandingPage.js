import React, {Component} from 'react';
import { Link } from "react-router-dom";
import logo from '../images/DS3.png';
import logo2 from '../images/DS3NOBGBG.png';
import "./LandingPage.css";

const styles = ({
    divStyle: {
      fontSize: '25px',
      textAlign: "center",
      fontFamily: 'arial',
    },
  
    divStyle2: {
      fontSize: '20px',
      textAlign: "center"
    },
  
  });

class LandingPage extends Component {

    state = {
        btnmsg: "Welcome",
        showLogo: true,
      }

      componentWillMount() {
        setInterval(this.handleShowLogo, 3000)
      }

      handleShowLogo = () => {
          const newState = {...this.state}
          newState.showLogo = !newState.showLogo
          this.setState(newState);
          console.log("mouse enter")
      };

    render() {

        let hideLogo = {
            'display': "flex" 
          };
          let hideLogo2 = {
            'display': "none" 
          };
              if(!this.state.showLogo) {
                hideLogo = { 
                  'display': "none"
               };
                
            hideLogo2 = { 'display': "flex" };
              }

        return (
            <div className="landingPageContainer">
                <div className="lanpagewrap">
                    {/* LOGO START */}
                    <div className="logocont">
                        <div className="logocirclewrap1">
                            <div className="logocirclewrap2" onMouseEnter= {this.handleShowLogo} style={hideLogo} >
                            <img className="logoimghome" src={logo} alt="logo" />
                            
                            </div>
                        </div>
                    </div>
                    {/* LOGO ENDS */}

                    {/* LOGO START */}
                    <div className="logocont">
                        <div className="logocirclewrap1">
                            <div className="logocirclewrap3" onMouseLeave= {this.handleShowLogo} style={hideLogo2} >
                            <img className="logoimghome" src={logo2} alt="logo" />
                            </div>
                        </div>
                    </div>
                    {/* LOGO ENDS */}
                    <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* APP DESCRIPTION STARTS */}
          <div className="descwrap1">
            <div className="descwrap2">
              <div style={styles.divStyle}>
                <p>Looking for Web Designs?</p>
              </div>
              <br></br>
              
              <div style={styles.divStyle2}>
                <p>Sarmiento Dev | Design | Development</p>
              </div>
              <br></br>
            </div>
          </div>
          <br></br>
          {/* APP DESCRIPTION ENDS */}

          <div className="loginsignupbtnhomewrap">
            <button onMouseEnter={() => this.setState({ btnmsg: "Go Inside!" })} onMouseLeave={() => this.setState({ btnmsg: 'Welcome!' })} className="loginsignupbtnhome">
            <Link to="/HomePage" className="linkLand">
            <div className={window.location === "/HomePage" ? "landpagediv landnow" : "landpagediv landnotnow"}>
              {this.state.btnmsg}</div></Link></button>
          </div>

                </div>
            </div>
        )
    };
}
export default LandingPage