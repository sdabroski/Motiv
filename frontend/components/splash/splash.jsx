import { Link } from 'react-router-dom';
import React from 'react';


class Splash extends React.Component{
    render(){
        
        if(this.props.currentUser){
            return (
                <> 
                    <h1> Welcome, {this.props.currentUser.email} </h1>
                    <button onClick={() => this.props.logout()}>Logout</button>
                </>
                );
        } else {
            return (
                <>
                    <h1>NOw i'm logged out!</h1>
                    {/* <h1> you're NOT logged in </h1>
                    <Link to={'/signup'} value='signup'>Signup</Link>
                    <Link to={'/login'} value='login' >Login</Link> */}
                </>
            )
        }
    }
}

export default Splash