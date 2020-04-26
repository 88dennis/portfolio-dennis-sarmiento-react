import React from 'react';
import './Backdrop.css'
const backDropComp = props => <div className="backdrop" onClick={props.canClose}></div>

export default backDropComp