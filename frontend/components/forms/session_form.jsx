import React from 'react'
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state)
    }

    update(field){
        return e => (
            this.setState({[field]: e.target.value})
        );
    }

    render(){

        let linkType = '/signup';
        let linkValue = 'Signup';

        if(this.props.formType === 'signup'){
            linkType = '/login';
            linkValue = 'Login';
        }

        if(this.props.formType === 'login'){
            return (
                <div id="login-page">
                    <div id="login-container">
                        <div id="login-header">
                            Log In
                        </div>
                        <div id="login-main">
                            <Link to="/" className="splash-signup-button" id="splash-demo-button">Demo Log In</Link>
                            <Link to="/" className="splash-signup-button" id="splash-demo-button">Sign Up Using Email</Link>
                            <div id="login-or-divider">
                                Or log in with email
                            </div>
                            <form id="login-form" onSubmit={this.handleSubmit}>
                                <input 
                                        className="login-input"
                                        type="text" 
                                        value={this.state.email} 
                                        placeholder="Your Email" 
                                        onChange={this.update("email")} 
                                />
                                <br/>
                                <input 
                                    className="login-input"
                                    type="password" 
                                    value={this.state.password} 
                                    placeholder="Password" 
                                    onChange={this.update("password")} 
                                />
                                <br />
                                <input type="submit" value="Log In" id="submit-button" className="login-input" />
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (

                <div>
                    this is your signup page
                </div>
            );
        }
    }
}


export default SessionForm;
