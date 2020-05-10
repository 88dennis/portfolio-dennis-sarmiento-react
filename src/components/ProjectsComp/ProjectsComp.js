import React from 'react';
import './ProjectsComp.css'
// import {Link} from 'react-router-dom';
// import logo from '../images/Idphoto2.jpg';

//articles is a prop name so when we use this component you can pass data into it
const projectsComp = (props) => {
    
    return (
    <>
       <div className="boxMainWrap">

{/* the key prop here is required by react */}
{/* if you want to do a method inside this html or pass a prop, you enclose it with a curly bracket */}
{/* pass the KEY prop to the OUTERMOST ELEMENT */}
{/* the key in the parameter is the INDEX */}
{/* its MUCH BETTER TO USE THE project._id as your key vs the index */}
{props.projects.map((project, index) => (
<div key={index} className="boxWrapper1">
<div>
<div className="box4">
<div className="appBoxMain">
            <div className="appBox">
            <div className="boxCont">
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer"><img className="projectImg" src={project.image} alt="Logo" /></a>
                
                </div>
                {/* <div className="spacer"></div> */}
                <div className="boxCont">
                    <h3>{project.name}</h3>
                    {/* THE projectBtnHandler comes from the portfolio page */}
                    {/* PASSES THE PARAMETER project._id TO THE PARENT COMPONENT PORTFOLIO PAGE THIS ID WILL BE USED TO CHANGE THE STATES NEEDED AND TO SHOW IT INTO THE MODAL */}
                    <button className="appInfoButton" onClick={() => props.projectBtnHandler(project._id)
                }>App Info</button>
                </div>
                </div>

            </div>
</div>
</div>



    {/* get portion of the content */}
   
    <br/>


    </div>
))}
{/* USING A FOR LOOP pass the items object*/}
{/* {items} */}
</div>
        
{/* USING A FOR LOOP pass the items object*/}
        {/* {items} */}
    </>
)};

export default projectsComp;