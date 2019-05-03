import { Link } from 'react-router-dom';
import React from 'react';


class Login extends React.Component {
    render() {
        return (
                <div id="login-main">
                    <div id="login-container">
                        <div id="login-header">
                            <p>Log In</p>
                        </div>
                        <div id="login-form">
                            <Link to="/" className="splash-signup-button" id="splash-demo-button">Demo Log In</Link>
                            <Link to="/" className="splash-signup-button" id="splash-demo-button">Demo Log In</Link>
                            <Link to="/" className="splash-signup-button" id="splash-demo-button">Demo Log In</Link>
                        </div>
                    </div>
                </div>
        )

    }
}

export default Login;
