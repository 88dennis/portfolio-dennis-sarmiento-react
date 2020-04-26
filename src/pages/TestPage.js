import React, {Component} from 'react';
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';

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

            {/* MODAL CODE STARTS */}
            {this.state.modalShow && <Backdrop canClose={this.modalCancelHandler}></Backdrop>}  
            {this.state.modalShow && <Modal title="Add Event" canCancel canConfirm onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
                <p>Modal Content</p>
            </Modal>}
            <div>
                <button className="modalButton" onClick={this.modalShowHandler}>MODAL</button>
            </div>
            {/* MODAL CODE ENDS */}
            </>
        )
    };
}
export default TestPage