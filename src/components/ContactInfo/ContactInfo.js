import React from 'react';
import './ContactInfo.css';
import ButtonLinks from "../ButtonLinks/ButtonLinks"



const contactInfo = props => (
    <>
    <div className="contactWrapper">
    <div className="contactWrapper2">
            <h3 className="contactInfo"><i className="user secret icon"></i>:Dennis Sarmiento</h3>
            <p className="contactInfo"><i className="phone icon"></i>: (206)880-9228</p>
            <p className="contactInfo"><i className="paper plane icon"></i>: dmsarmiento80@gmail.com</p>
            </div>
            </div>
            <ButtonLinks></ButtonLinks>
           
   </>
)

export default contactInfo