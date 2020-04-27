import React from 'react';
import './PageLinks.css';
import { Link } from "react-router-dom";

const pageLinksComp = props => (
  <section>
    <Link to="/HomePage"><div className={window.location.pathname === ("/portfolio-dennis-sarmiento-react/HomePage" || "https://88dennis.github.io/portfolio-dennis-sarmiento-react/HomePage") ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
        Home</div></Link>
        
        <Link to="/AboutMePage"><div className={window.location.pathname === ("/portfolio-dennis-sarmiento-react/AboutMePage" || "https://88dennis.github.io/portfolio-dennis-sarmiento-react/AboutMePage") ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
        About Me</div></Link>

        <Link to="/PortfolioPage"><div className={window.location.pathname === ("/portfolio-dennis-sarmiento-react/PortfolioPage" || "https://88dennis.github.io/portfolio-dennis-sarmiento-react/PortfolioPage") ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
        Portfolio</div></Link>
        
        <Link to="/"><div className={window.location.pathname === ("/portfolio-dennis-sarmiento-react/" || "https://88dennis.github.io/portfolio-dennis-sarmiento-react/") ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
        Back to Main</div></Link>
{/* 
        <Link to="/ModalPage"><div className={window.location.pathname === "/ModalPage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Modal Page </div></Link> 

      <Link to="/TestPage"><div className={window.location.pathname === ("/portfolio-dennis-sarmiento-react/TestPage" || "https://88dennis.github.io/portfolio-dennis-sarmiento-react/TestPage") ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Test Page </div></Link>

      <Link to="/gethelppage"><div className={window.location.pathname === "/gethelppage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Get Help </div></Link> */}

  </section>
)

export default pageLinksComp