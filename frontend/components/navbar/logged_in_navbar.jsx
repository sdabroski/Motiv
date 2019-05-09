import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { logout } from '../../actions/session_actions';

class LoggedInNavbar extends React.Component {
    render() {
        // let navButtonID;
        // let navButtonText;
        // let navButtonDestination = '/';

        // if (this.props.currentURL === "/" || this.props.currentURL === "/feed") {
        //     navButtonText = "Log In";
        //     navButtonID = "splash";
        //     navButtonDestination = "/login"
        // } else if (this.props.currentURL === "/login") {
        //     navButtonText = "Sign Up";
        //     navButtonID = "non-splash";
        //     navButtonDestination = "/signup"
        // } else if (this.props.currentURL === "/signup") {
        //     navButtonText = "Log In";
        //     navButtonID = "non-splash";
        //     navButtonDestination = "/login"
        // };

        return (
            <div className="navbar">
                <div className="navbar-left">


                    <div className="nav-element">
                        <Link to='feed' id="logo" ><img id="logo" src={window.images.motiv} /></Link>
                    </div>

                    <NavLink to='/feed' className="logged-in-link" activeClassName='is-active'>Feed</NavLink>
                    <NavLink to='/routes/new' className="logged-in-link" activeClassName='is-active' >Routes</NavLink>
                    <NavLink to='/workouts' className="logged-in-link" activeClassName='is-active'>Workouts</NavLink>


                </div>
                <div className="navbar-right">
                    <div className="nav-element">
                        <button className="logged-in-link" onClick={() => this.props.logout()}>Log Out</button>
                    </div>
                </div>
            </div>
        );
        
        
    }
}

export default LoggedInNavbar;