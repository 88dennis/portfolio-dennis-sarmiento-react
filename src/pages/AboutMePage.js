import React, {Component} from 'react';
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';
import Toolbar from "../components/Toolbar/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import PageLinks from "../components/PageLinks/PageLinks";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";
import SideDrawerBackdrop from "../components/SideDrawerBackdrop/SideDrawerBackdrop";
import ProfileContent from "../components/ProfileContent";
import { Link } from "react-router-dom";
import logo from '../images/profilepic.JPG';
import ButtonLinks from "../components/ButtonLinks/ButtonLinks";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import resume from '../images/DennisSarmientoResumeWebDev3.pdf';
import "./AboutMePage.css";

const iconStyle = ({
    iconFont: {
        fontSize: "30px",
        color: "white",
        paddingBottom: "5px"
    }
})


class AboutMePage extends Component {
    state = {
        modalShow: false,
        modalResume: false,
        sideDrawerOpen: false
    };

    // MODAL CODE STARTS
    modalShowHandler = () => {
        const newState = {...this.state}
        newState.modalShow = true;
        this.setState(newState);
    }
    modalCancelHandler =() => {
        this.setState(
            {
                modalShow: false
            }
            )
    }
    modalConfirmHandler =() => {
        this.setState(
            {
                modalShow: false
            }
            )
    }

    modalResumeClickHandler = () => {
        const newState = {...this.state}
        newState.modalResume = true;
        this.setState(newState);
    }
        // MODAL CODE ENDS

        //SIDE DRAWER CODE STARTS
        drawerToggleClickHandler = () => {
            const newState = { ...this.state }
            newState.sideDrawerOpen = !newState.sideDrawerOpen
            this.setState(newState);
          }
          drawerBackdropClickHandler = () => {
            const newState = { ...this.state }
            newState.sideDrawerOpen = false;
            this.setState(newState);
          }

        // //same:
        // drawerToggleClickHandler = () => {
        //    this.setState((prevState) =>{
        //      return {sideDrawerOpen: !prevState.sideDrawerOpen}
        //      });
        //    };

        //SIDE DRAWER CODE ENDS
        render() {
            //for SIDE DRAWER AND ITS BACKDROP
            
            let sideDrawerBackdrop;
            let aboutMeIcon;
            if(this.state.sideDrawerOpen){
                sideDrawerBackdrop = <SideDrawerBackdrop drawerBackdropClickHandler={this.drawerBackdropClickHandler}/>
            }
            if(window.location.pathname === ("/portfolio-dennis-sarmiento-react/AboutMePage" || "https://88dennis.github.io/portfolio-dennis-sarmiento-react/AboutMePage")){
                aboutMeIcon = <i className="user secret icon" style={iconStyle.iconFont}></i>;
            }


            //-----------------------------------
        return (
            <>
            <div style={{height: "100%", padding: "0"}}> 
            <Toolbar aboutMeIcon={aboutMeIcon} logo="About Me" toggleDrawer={this.drawerToggleClickHandler}>
           <Link to="/HomePage"><button title = "Home" className="modalButton"><i className="home icon big"></i></button></Link> 
            <button title = "Contact Info" className="modalButton" onClick={this.modalShowHandler}><i className="address book icon" style={iconStyle.iconFont}></i></button>
            </Toolbar>
            <SideDrawer show={this.state.sideDrawerOpen}>
            <PageLinks backToSamePage = {this.drawerBackdropClickHandler}/>
            </SideDrawer>
            {sideDrawerBackdrop}

            {/* MODAL CODE STARTS */}
            {this.state.modalShow && <Backdrop canClose={this.modalCancelHandler}></Backdrop>}  
            {this.state.modalShow && <Modal title="CONTACT INFO" btnName1="Back" btnName2="Home" canCancel canConfirm onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
            <ContactInfo />
            </Modal>}
            {/* MODAL CODE ENDS */}

        {/* HOW TO CREATE A JAVASCRIPT OBJECT USING DOUBLE CURLY BRACES*/}
        {/* style={{marginTop: "100px"}} */}
            <main>
                <div className="aboutMeCont1"style={{paddingTop: "75px"}} >
                    <div className="box1">
                    <ProfilePicture>
            <img className="profileimghome" src={logo} alt="Logo" />
          </ProfilePicture>

          <ProfileContent profilegreet="Hello -- my name is Dennis Sarmiento.">
            <p>Certified Web Developer working with software at the <a
              href="https://drive.google.com/file/d/1QhZBQFCtF6s02nv2C6gX8yahuOIoBdQO/view">Full
									Stack Bootcamp at the University of Washington in Seattle</a>. Check my applications
								out on my <Link to="/PortfolioPage">Portfolio Page</Link>.</p>
            
            <p>I've also always been an engineer at heart. Attaining a Bachelor's degree in Mechanical
              Engineering, I am no stranger to engineering projects. I thrive working on the
              complexities of mechanical engineering projects through my own contracting company
              (Frontview Manpower Services Co.) and the build-outs for my fastfood business (RFC Food
								Services).</p>
            

            <p>My experience with running my companies lend itself well to effective teamwork and
              strategic thinking.
								Connect and learn more about me by clicking the icons below:</p>
          </ProfileContent>
          <br></br>


          {/* RESUME PORTION  STARTS*/}
          <ButtonLinks
            modalResumeClick={this.modalResumeClickHandler}
          />

          {this.state.modalResume && <Backdrop canClose={this.modalCancelHandler} />}
          {this.state.modalResume && <Modal title="My Resume" btnName1="Go Back" btnName2="Home Page" canCancel canConfirm onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
          <div className="embedwrapper"><embed src={resume} type="application/pdf"
				width="100%" height="100%" />
		</div>
          </Modal>}
          {/* RESUME PORTION ENDS */}
          
                    </div>
                    <div className="box2"></div>
                </div>
            </main>

            </div>
            </>
        )
    };
}
export default AboutMePage;