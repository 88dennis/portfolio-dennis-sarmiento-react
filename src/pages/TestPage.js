import React, {Component} from 'react';
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';
import Toolbar from "../components/Toolbar/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import PageLinks from "../components/PageLinks/PageLinks";
import SideDrawerBackdrop from "../components/SideDrawerBackdrop/SideDrawerBackdrop";

const addMargin = ({
    addMargin1: {
      marginTop: '100px',
    }
  });

class TestPage extends Component {
    state = {
        modalShow: false,
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

            if(this.state.sideDrawerOpen){
                sideDrawerBackdrop = <SideDrawerBackdrop drawerBackdropClickHandler={this.drawerBackdropClickHandler}/>
            }
            //-----------------------------------


        return (
            <>
            <div style={{height: "100%", padding: "0"}}> 
            <Toolbar toggleDrawer={this.drawerToggleClickHandler}></Toolbar>
            <SideDrawer show={this.state.sideDrawerOpen}>
            <PageLinks backToSamePage = {this.drawerBackdropClickHandler}/>
            </SideDrawer>
            {sideDrawerBackdrop}

            {/* MODAL CODE STARTS */}
            {this.state.modalShow && <Backdrop canClose={this.modalCancelHandler}></Backdrop>}  
            {this.state.modalShow && <Modal title="Add Event" canCancel canConfirm onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
                <p>Modal Content</p>
            </Modal>}
        {/* HOW TO CREATE A JAVASCRIPT OBJECT USING DOUBLE CURLY BRACES*/}
        {/* style={{marginTop: "100px"}} */}
            <main>
                <div style={{paddingTop: "100px"}} >
                <button style={addMargin.addMargin1} className="modalButton" onClick={this.modalShowHandler}>MODAL</button>
                </div>
            </main>
            {/* MODAL CODE ENDS */}
            </div>
            </>
        )
    };
}
export default TestPage;