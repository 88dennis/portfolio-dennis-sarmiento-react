import React, {Component} from 'react';


class HomePage extends Component {

    render() {
        return (
            <>
            <div className="mainpagewrap">

            <div className=".circles">  

                <div id="circle1" className="three-circles">
                    <button id="btnid1" className="btn1">
                        <div className="me-circle">
                            <h1 className="front-names">Dennis</h1>
                        </div>
                    </button>
                </div>

                <div id="circle1" className="three-circles">
                    <button id="btnid1" className="btn1">
                        <div className="me-circle">
                            <h1 className="front-names">Portfolio</h1>
                        </div>
                    </button>
                </div>
                <div id="circle1" className="three-circles">
                    <button id="btnid1" className="btn1">
                        <div className="me-circle">
                            <h1 className="front-names">Contact</h1>
                        </div>
                    </button>
                </div>
            </div>
            </div>

            </>
        )
    };
}
export default HomePage