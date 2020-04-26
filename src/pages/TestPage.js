import React, {Component} from 'react';
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';
import Toolbar from "../components/Toolbar/Toolbar"




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
            <> 
            <Toolbar></Toolbar>
            
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
            </>
        )
    };
}
export default TestPage