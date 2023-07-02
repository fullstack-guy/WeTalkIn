// dependencies:
import React, { Component } from "react";

// ---- files:
import './style.css';
import wtlogo from '../../../assets/logos/wt_logo.png';


class HomeBody extends Component {
    render () {
        return (

            <React.Fragment>

                <div>
                    <img src={ wtlogo } className="App-logo" alt="logo" />

                    <br />

                    <p className="bodyHeading">Download on the AppStore:</p>

                    <a className="projectLink" href="https://apps.apple.com/us/app/wetalkin/id1598817389">
                        <button type="button" className="btn btn-outline btn-warning ml-2 mr-2 mt-0 mb-4">
                            WeTalkin - AppStore
                        </button>
                    </a>

                    <a className="App-link" href="https://blossend.com" target="_blank" rel="noopener noreferrer">
                        Learn more about Blossend
                    </a>

                    <br /><br /><br />
                </div>

            </React.Fragment>

        );
    }
}

export default HomeBody;