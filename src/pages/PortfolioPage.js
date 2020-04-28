import React, {Component} from 'react';
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';
import Toolbar from "../components/Toolbar/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import PageLinks from "../components/PageLinks/PageLinks";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import SideDrawerBackdrop from "../components/SideDrawerBackdrop/SideDrawerBackdrop";
import ProjectsComp from "../components/ProjectsComp/ProjectsComp";
import { Link } from "react-router-dom";
import "./PortfolioPage.css";
import projectData from '../projectData';

console.log(projectData);

const iconStyle = ({
    iconFont: {
        fontSize: "30px",
        color: "white",
        paddingBottom: "5px"
    }
})

class PortfolioPage extends Component {
    state = {
        modalShow: false,
        modalShowAppInfo: false,
        sideDrawerOpen: false,
        projectId:"",
        projectName:"",
        projectInfo:"",
        projectModalLink:"",
        projectImage:"",
        projectGitimage:"",
        projectGitHubLink:"",
       
    };



    projectBtnHandler = id => {
        const newState = { ...this.state }
        const project = projectData.find(project => project._id === id);
        console.log(project);
        newState.projectId = id
        newState.projectName = project.name
        newState.projectInfo = project.projectInfo
        newState.projectModalLink = project.projectLink
        newState.projectImage = project.image
        newState.projectGitimage = project.gitimage
        newState.projectGitHubLink = project.gitHubLink
        newState.modalShowAppInfo = true;
        // newState.modallProjectInfoShow=!newState.modallProjectInfoShow
        console.log(id)
        console.log(project.name)
        console.log(project.gitimage)
        // newState.showMe = !newState.showMe
        // newState.scale = this.state.scale > 1 ? 1 : 1.5
        this.setState(newState);
      }

    // MODAL CODE STARTS
    modalShowHandler = () => {
        const newState = {...this.state}
        newState.modalShow = true;
        this.setState(newState);
    }

    modalCancelHandler =() => {
        this.setState(
            {
                modalShow: false,
                modalShowAppInfo: false
            }
            )
    }
    modalConfirmHandler =() => {
        this.setState(
            {
                modalShow: false,
                modalShowAppInfo: false
            }
            )
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
            let appLink;
            let gitLink;
            let codeIcon;

            if(this.state.modalShowAppInfo) {
                appLink = <a href={this.state.projectModalLink} target="_blank" rel="noopener noreferrer"><button className="modalButtons">Open App</button></a>
                gitLink=<a href={this.state.projectGitHubLink} target="_blank" rel="noopener noreferrer"><button className="buttonLinksbtn"><img className="iconsimg" src={this.state.projectGitimage} alt="github"></img></button></a>
             
            }
            
            let sideDrawerBackdrop;
            if(this.state.sideDrawerOpen){
                sideDrawerBackdrop = <SideDrawerBackdrop drawerBackdropClickHandler={this.drawerBackdropClickHandler}/>
            }

            if(window.location.pathname === ("/portfolio-dennis-sarmiento-react/PortfolioPage" || "https://88dennis.github.io/portfolio-dennis-sarmiento-react/PortfolioPage")){
                codeIcon = <i className="code icon big" style={iconStyle.iconFont}></i>;
            }
            //-----------------------------------
        return (
            <>
            <div style={{height: "100%", padding: "0"}}> 
            <Toolbar codeIcon={codeIcon} logo="Portfolio" toggleDrawer={this.drawerToggleClickHandler}>
           <Link to="/HomePage"><button title="Home"className="modalButton"><i className="home icon big"></i></button></Link> 
            <button title="Contact Info"className="modalButton" onClick={this.modalShowHandler}><i className="address book icon" style={iconStyle.iconFont}></i></button>
            </Toolbar>
            <SideDrawer show={this.state.sideDrawerOpen}>
            <PageLinks backToSamePage = {this.drawerBackdropClickHandler}/>
            </SideDrawer>
            {sideDrawerBackdrop}

            {/* MODAL CODE STARTS */}
            {this.state.modalShow && <Backdrop canClose={this.modalCancelHandler}></Backdrop>}  
            {this.state.modalShow && <Modal  title="CONTACT INFO" btnName1="Back" btnName2="Home" canCancel canConfirm onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
        
            <ContactInfo />
            </Modal>}
            {/* MODAL CODE ENDS */}

            {/* MODAL CODE STARTS */}
            {this.state.modalShowAppInfo && <Backdrop canClose={this.modalCancelHandler}></Backdrop>}  
            {this.state.modalShowAppInfo && <Modal gitLink={gitLink} appLink={appLink}title={this.state.projectName} btnName1="Back" btnName2="Home" canCancel canConfirm onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
            <p>{this.state.projectInfo}</p>
            </Modal>}
            {/* MODAL CODE ENDS */}

        {/* HOW TO CREATE A JAVASCRIPT OBJECT USING DOUBLE CURLY BRACES*/}
        {/* style={{marginTop: "100px"}} */}
            <main>
                <div className="aboutMeCont1"style={{paddingTop: "75px"}} >
                    <div className="box3">
          <ProjectsComp projectBtnHandler={this.projectBtnHandler} projects={projectData} />

                    </div>
                    <div className="box2"></div>
                </div>
            </main>

            </div>
            </>
        )
    };
}
export default PortfolioPage;