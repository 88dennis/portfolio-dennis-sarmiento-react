import React, {Component} from 'react';
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';
import Toolbar from "../components/Toolbar/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import SideDrawerBackdrop from "../components/SideDrawerBackdrop/SideDrawerBackdrop";




const addMargin = ({
    addMargin1: {
      marginTop: '100px',
    }
  });


class TestPage extends Component {

    state = {
        modalShow: false
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

    render() {


        return (
            <div style={{height: "100%", padding: "0"}}> 
            <Toolbar></Toolbar>
            <SideDrawer></SideDrawer>
            <SideDrawerBackdrop></SideDrawerBackdrop>
            
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
        )
    };
}
export default TestPage