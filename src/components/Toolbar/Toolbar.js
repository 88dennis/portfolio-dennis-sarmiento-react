import React from 'react';
import "./Toolbar.css"

//functional component

const toolbarComp = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_lßogo"><a href="/">THE LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>

        </nav>
    </header>
)

export default toolbarComp
