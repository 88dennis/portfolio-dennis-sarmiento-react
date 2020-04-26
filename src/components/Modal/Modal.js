import React from 'react';
import './Modal.css'

//GOES WITH A BACKDROP
const modalComp = props => (

    <div className="modal">
        <div className="modalHeader">
        <h1>{props.title}</h1>
        </div>
        <section className="modal_content">
        {props.children}
        </section>
        <section className="modal_actions">
        {props.canCancel && <button className="btn" onClick={props.onCancel}>Cancel</button>}
        {props.canConfirm && <button className="btn" onClick={props.onConfirm}>Confirm</button>}        
        </section>

    </div>
    
)

export default modalComp