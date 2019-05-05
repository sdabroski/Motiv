import React from 'react';


class Feed extends React.Component {
    
    render() {
        return (
            <>
                <h1> Welcome, {this.props.currentUser.email} </h1>
                <button onClick={() => this.props.logout()}>Logout</button>
            </>
        );
    }
}

export default Feed;