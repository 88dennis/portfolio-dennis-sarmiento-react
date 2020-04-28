import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./HomePage.css";


class HomePage extends Component {

    render() {
        return (
            <>
  
            <div className="mainpagewrap">

            <div className=".circles">

                <div id="circle1" className="three-circles">
                <Link to="/AboutMePage">
                    <button id="btnid1" className="btn1">
                        <div className="me-circle">
                            <h1 className="front-names">About Me</h1>
                        </div>
                    </button>
                    </Link>
                </div>

                <div id="circle2" className="three-circles">
                <Link to="/PortfolioPage">
                    <button id="btnid2" className="btn1">
                        <div className="me-circle">
                            <h1 className="front-names">Portfolio</h1>
                        </div>
                    </button>
                    </Link>
                </div>

                <div id="circle3" className="three-circles">

                <Link to="/ContactPage">
                    <button id="btnid3" className="btn1">
                        <div className="me-circle">
                            <h1 className="front-names">Contact</h1>
                        </div>
                    </button>
                    </Link>
                </div>

            </div>
            </div>

            </>
        )
    };
}
export default HomePage