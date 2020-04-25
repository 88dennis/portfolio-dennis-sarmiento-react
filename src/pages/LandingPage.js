import React, {Component} from 'react';
import logo from '../images/DS3.png';
import logo2 from '../images/DS3NOBGBG.png';

class LandingPage extends Component {

    state = {
        btnmsg: "Welcome",
        showLogo: true,
      }

      handleShowLogo = () => {
          const newState = {...this.state}
          newState.showLogo = !newState.showLogo
          this.setState(newState);
          console.log("mouse enter")
      }


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



                </div>
            </div>
        )
    };
}
export default LandingPage