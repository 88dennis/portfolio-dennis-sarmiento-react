import React from 'react';
// import {Link} from 'react-router-dom';

//articles is a prop name so when we use this component you can pass data into it
const projectsComp = (props) => {
    
    return (
    <>
        {/* the key prop here is required by react */}
        {/* if you want to do a method inside this html or pass a prop, you enclose it with a curly bracket */}
        {/* pass the KEY prop to the OUTERMOST ELEMENT */}
        {props.projects.map((project, key) => (
            <div key={key}>
            <h3>{project._id}</h3>
            {/* get portion of the content */}
            <p>{project.name}</p>
            <br/>
            <button onClick={() => props.projectBtnHandler(project._id)}> app</button>
            <hr></hr>
            </div>
        ))}
{/* USING A FOR LOOP pass the items object*/}
        {/* {items} */}
    </>
)};

export default projectsComp;