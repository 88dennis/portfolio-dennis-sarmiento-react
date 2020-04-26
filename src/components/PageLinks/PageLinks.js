import React from 'react';
import './PageLinks.css';
import { Link } from "react-router-dom";

const pageLinksComp = props => (
  <section>
    <Link to="/HomePage"><div className={window.location.pathname === "/portfolio-dennis-sarmiento-react/HomePage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
        Home</div></Link>
        <Link to="/LandingPage"><div className={window.location.pathname === "/LandingPage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
        Main</div></Link>

        <Link to="/ModalPage"><div className={window.location.pathname === "/ModalPage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Modal Page </div></Link> 

      <Link to="/TestPage"><div className={window.location.pathname === "/portfolio-dennis-sarmiento-react/TestPage" || "https://88dennis.github.io/portfolio-dennis-sarmiento-react/TestPage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Test Page </div></Link>

      <Link to="/gethelppage"><div className={window.location.pathname === "/gethelppage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Get Help </div></Link>

  </section>
)

export default pageLinksComp