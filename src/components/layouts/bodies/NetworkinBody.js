// dependencies:
import React, { Component } from "react";

// ---- files:
import './style.css';


const NetworkinBody = () => {
    return (

        <React.Fragment>


            <div>

                <p>
                    networkin projects:
                </p>

                <a className="projectLink" href="https://apps.apple.com/us/app/wetalkin/id1598817389">
                    <button type="button" className="btn btn-outline btn-warning ml-2 mr-2 mt-0 mb-4">
                        WeTalkin - AppStore
                    </button>
                </a>

                <br></br><br></br>

                <a className="projectLink" href="https://apps.apple.com/us/app/wetalkin/id1598817389">
                    <button type="button" className="btn btn-outline btn-warning ml-2 mr-2 mt-0 mb-4">
                        ↔️ NS (soon!)
                    </button>
                </a>

                <br /><br /><br />

            </div>

        </React.Fragment>


    );
};

export default NetworkinBody;