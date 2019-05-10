import React from 'react'
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {
            email: "",
            password: "",
            first_name: "",
            last_name: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state)
        .then(
            () => {
                this.props.history.push('/routes')
            }

            // (currentUser) => {
            // if (currentUser.id) this.props.history.push('/feed')
        // }
        )
    }

    demoLogin(e){
        let demoState = {
            email: "stefan@wave.com",
            password: "password",
            first_name: "Stefan",
            last_name: "Dabroski"
        };
        this.props.demoSubmit(demoState)
            .then(
                () => {
                    this.props.history.push('/feed')
                }
            )
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
                            <p>Log In</p>
                        </div>
                        <div id="login-main">
                            <button className="login-button" id="login-demo-button" onClick={() => this.demoLogin()}> Demo Log In</button>
                            <Link to="/signup" className="login-button" id="splash-login-button">Sign Up Using Email</Link>
                            <div id="login-or-divider">
                                <p>Or log in with email</p>
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
                                <input type="submit" value="Log In" id="submit-button" className="login-button" />
                            </form>
                            <div className="login-disclaimer-text">
                                <p>If you want to see the real Strava, <a className="disclaimer-link" href="https://www.strava.com/login">Click Here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="signup-page">
                    <div id="signup-container">
                        <div id="signup-header">
                            <p>Join Motiv today, <br/> it's Free.</p>
                        </div>
                        <div id="signup-main">
                            <button className="login-button" id="login-demo-button" onClick={() => this.demoLogin()}> Demo Log In</button>
                            <div id="signup-or-divider">
                                <p className="signup-disclaimer-text">or sign up with your email address</p>
                            </div>
                            <form id="signup-form" onSubmit={this.handleSubmit}>
                                <input
                                    className="signup-input"
                                    type="text"
                                    value={this.state.email}
                                    placeholder="Your Email"
                                    onChange={this.update("email")}
                                />
                                <br />
                                <input
                                    className="signup-input"
                                    type="text"
                                    value={this.state.first_name}
                                    placeholder="First Name"
                                    onChange={this.update("first_name")}
                                />
                                <br />
                                <input
                                    className="signup-input"
                                    type="text"
                                    value={this.state.last_name}
                                    placeholder="Last Name"
                                    onChange={this.update("last_name")}
                                />
                                <br />
                                <input
                                    className="signup-input"
                                    type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.update("password")}
                                />
                                <br />
                                <input type="submit" value="Sign Up" id="signup-submit-button" className="signup-button" />
                            </form>
                            <br />
                            <div className="signup-disclaimer-text">
                                <p>If you want to see the real Strava, <a className="disclaimer-link" href="https://www.strava.com/login">Click Here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}


export default SessionForm;
