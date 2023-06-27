// dependencies:
import React from "react";

// ---- LAYOUT:
// ---- COMPONENTS:
// ---- files:
import "./style.css";
import wtlogo from '../../../assets/logos/wt_logo.png';





const Body = () => {
    return (

        <body>

            <img src={ wtlogo } className="App-logo" alt="logo" />

            <br />

            <p className='bodyHeading'>
                Download on the AppStore:
            </p>

            <a className="projectLink" href="https://apps.apple.com/us/app/wetalkin/id1598817389">
                <button type="button" className="btn btn-outline-success btn-warning ml-2 mr-2 mt-0 mb-4">
                    WeTalkin - AppStore
                </button>
            </a>

            <a
                className="App-link"
                href="https://blossend.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn more about Blossend
            </a>

            <br /><br /><br />

        </body>


    );
};

export default Body;



































// class Header extends React.Component {
//     render () {
//         return (
//             <React.Fragment>

//                 <nav class="navbar navbar-expand-sm py-0 my-0 mr-0 mr-sm-0 ml-5">
//                     {/* <HeaderLeft />
//                     <HeaderRight /> */}
//                 </nav>

//             </React.Fragment >
//         );
//     }
// }

// class HeaderLeft extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <Route path="/" component={LogoWhite} />
//                 <Route path="/" component={SearchBar} />
//             </React.Fragment>
//         );
//     }
// }

// deterministic header, displays user's name & logout button if logged in, otherwise login and signup buttons.
// class HeaderRight extends React.Component {
//     render() {
//         var token = localStorage.getItem("jsonwebtoken");
//         if(token !== null) {
//             var decodedToken = jwt.decode(token);
//             var username = decodedToken.username;
//             return (
//                 <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

//                     <ul class="ml-5 mr-0 my-2 my-lg-0">
//                         <h6 style={{ color: 'white' }}>Welcome, {username}!</h6>
//                     </ul>

//                     <ul class="ml-0 my-2 my-lg-0">
//                         <Link class="btn btn-secondary btn-sm my-2 my-sm-0" to="/logout">Logout</Link>
//                     </ul>

//                 </div>
//             );
//         }
//         return (
//             <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

//                 {/* ---- LOGIN */}
//                 <ul class="ml-5 mr-0 my-2 my-lg-0">
//                     {/* <button class="btn btn-secondary btn-sm my-2 my-sm-0" type="button" >Login</button> */}
//                     <Link class="btn btn-secondary btn-sm my-2 my-sm-0" to="/login">Login</Link>
//                 </ul>

//                 {/* ---- SIGNUP */}
//                 <ul class="ml-0 my-2 my-lg-0">
//                     {/* <button onClick={() => history.push('signup')} class="btn btn-secondary btn-sm my-2 my-sm-0" type="button"> SignUp</button> */}
//                     <Link class="btn btn-secondary btn-sm my-2 my-sm-0" to="/signup">SignUp</Link>
//                 </ul>

//             </div>
//         );
//     }
// }

// export default Header;
