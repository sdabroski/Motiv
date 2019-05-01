import { Link } from 'react-router-dom';
import React from 'react';


class Greeting extends React.Component{
    render(){
        
        if(this.props.currentUser){
            return (
                <> 
                    <h1> you're logged in </h1>
                    <button onClick={() => this.props.logout()}>Logout</button>
                </>
                );
        } else {
            return (
                <>
                    <h1> you're NOT logged in </h1>
                    <Link to={'/signup'} value='signup'>Signup</Link>
                    <Link to={'/login'} value='login' >Login</Link>
                </>
            )
        }
    }
}

export default Greeting