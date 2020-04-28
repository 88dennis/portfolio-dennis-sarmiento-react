import React from 'react';
import { Link } from "react-router-dom";

import './Modal.css'

//GOES WITH A BACKDROP
const modalComp = (props) => {
 
    console.log(props.appLink)
    console.log(props.gitLink, "asdasdasdadas")

    let appLinkButton;
    let gitLinkButton;
    if(props.appLink){
appLinkButton = props.appLink
gitLinkButton = props.gitLink



    }
    
    return (

    <div className="modal">
        <div className="modalHeader">
        <h1>{props.title}</h1>
        </div>
        <section className="modal_content">
        {props.children}
        </section>

        <section className="modal_actions">

        {gitLinkButton}
        {appLinkButton}
        {props.canCancel && <button className="modalButtons" onClick={props.onCancel}>{props.btnName1}</button>}
        {props.canConfirm && <Link to="/HomePage"><button className="modalButtons" onClick={props.onConfirm}>{props.btnName2}</button></Link>}        
        </section>

    </div>
    
)
};

export default modalComp