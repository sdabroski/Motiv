import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


class Feed extends React.Component {
    
    render() {
        return (
            <>
                <h1> Welcome, {this.props.currentUser.email} </h1>
                <button onClick={() => this.props.logout()}>Logout</button>
                <Link to="/routes/new">Create Route</Link>
            </>
        );
    }
}

export default Feed;