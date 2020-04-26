import React, {Component} from 'react';
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';

class ModalPage extends Component {
    state = {
        modalShow: false
    };

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

    render() {


        return (
            <> 
            {this.state.modalShow && <Backdrop canClose={this.modalCancelHandler}></Backdrop>}  
            {this.state.modalShow && <Modal title="Add Event" canCancel canConfirm onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
                <p>Modal Content</p>
            </Modal>}
            <div>
                <button onClick={this.modalShowHandler}>MODAL</button>
            </div>
            </>
        )
    };
}
export default ModalPage