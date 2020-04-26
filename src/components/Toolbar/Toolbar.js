import React from 'react';
import "./Toolbar.css"
import DrawerToggle from "../SideDrawer/DrawerToggle"

//functional component

const toolbarComp = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggle></DrawerToggle>
            </div>
            <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">Main</a></li>  
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Contact</a></li>
                    
                </ul>
            </div>

        </nav>
    </header>
)

export default toolbarComp
