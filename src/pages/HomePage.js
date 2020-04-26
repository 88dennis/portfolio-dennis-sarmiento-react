import React, {Component} from 'react';
import { Link } from "react-router-dom";


class HomePage extends Component {

    render() {
        return (
            <>
            <Link to="/ModalPage"><button>Modal Page</button></Link>
            <Link to="/TestPage"><button>Test Page</button></Link>
            <div className="mainpagewrap">

            <div className=".circles">

                <div id="circle1" className="three-circles">
                <Link to="/AboutMe">
                    <button id="btnid1" className="btn1">
                        <div className="me-circle">
                            <h1 className="front-names">Dennis</h1>
                        </div>
                    </button>
                    </Link>
                </div>

                <div id="circle1" className="three-circles">
                <Link to="/Portfolio">
                    <button id="btnid1" className="btn1">
                        <div className="me-circle">
                            <h1 className="front-names">Portfolio</h1>
                        </div>
                    </button>
                    </Link>
                </div>
                <div id="circle1" className="three-circles">

                <Link to="/Contact">
                    <button id="btnid1" className="btn1">
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