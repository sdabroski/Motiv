import { Link } from 'react-router-dom';
import React from 'react';
import LoggedInNavbar from './logged_in_navbar';
import LoggedOutNavbar from './logged_out_navbar';


class Navbar extends React.Component {
    render() {
        if(this.props.currentUser){
            return (
                <LoggedInNavbar
                   currentURL={this.props.currentURL}    
                   logout={this.props.logout}
                />
            )
        } else {
            return (
                <LoggedOutNavbar
                    currentURL={this.props.currentURL}
                    logout={logout}
                />
            )
        }
            
    }
}

export default Navbar