import { Link } from 'react-router-dom';
import React from 'react';

class Navbar extends React.Component {
    render() {

        

        // if (this.props.currentUser) {
        //     return (
        //         <>
        //         </>
        //     );
        // } else {

            let navButtonID;
            let navButtonText;
            let navButtonDestination;

            if(this.props.currentURL === "/" || this.props.currentURL === "/feed"){
                navButtonText = "Log In";
                navButtonID = "splash";
                navButtonDestination = "/login"
            } else if(this.props.currentURL === "/login"){
                navButtonText = "Sign Up";
                navButtonID = "non-splash";
                navButtonDestination = "/signup"
            } else if(this.props.currentURL === "/signup"){
                navButtonText = "Log In";
                navButtonID = "non-splash";
                navButtonDestination = "/login"
            };

            return (
                <div className="navbar">
                    <div className="navbar-left">
                        <div className="nav-element">
                            <Link to='/' id="logo" ><img id="logo" src={window.motiv}/></Link>
                        </div>
                        
                    </div>
                    <div className="navbar-right">
                        <div className="nav-element">
                            <Link to={navButtonDestination} id={navButtonID} className="navbar-button" >{navButtonText}</Link>
                        </div>
                    </div>
                </div>
            );
        // }
    }
}

export default Navbar