import { Link } from 'react-router-dom';
import React from 'react';
import Map from '../map/map';


class Splash extends React.Component{

    constructor(props) {
        super(props);
        this.demoLogin = this.demoLogin.bind(this);
    }

    demoLogin() {
        let demoState = {
            email: "stefan@wave.com",
            password: "password",
            first_name: "Stefan",
            last_name: "Dabroski"
        };
        this.props.demoSubmit(demoState)
    }


    render(){
        
        if(this.props.currentUser){
            return (
                <> 
                    <h1> Welcome, {this.props.currentUser.email} </h1>
                    <button onClick={() => this.props.logout()}>Logout</button>
                    <Map />
                </>
                );
        } else {
            return (
                    <div>
                        <div className=".text-container">
                            <h1 id="header-text">The #1 app for runners and cyclists</h1>
                        </div>
                        <div id= "splash-bottom-div">
                            <div>
                                <img id= "phone-image" src="https://bit.ly/2Wjmiil"></img>
                            </div>
                            <div id="splash-button-container">
                                <button className="login-button" id="login-demo-button" onClick={() => this.demoLogin()}> Demo Log In</button>
                                 <Link to="/login" className="splash-signup-button" id="splash-login-button">Log In With Email</Link>
                                 <div id="or-divider">or</div> 
                                 <Link to="/signup" className="splash-signup-button" id="splash-signup-button">Sign Up</Link>
                                <p className="splash-disclaimer-text"> By signing up for Strava, you agree to the <br/>
                                    <a href="https://www.strava.com/legal/terms">Terms of Service</a>. 
                                    View our <a href="https://www.strava.com/legal/privacy">Privacy Policy</a>.
                                    <br/> <br/>
                                    Already a Member? <Link to="/login">Log In</Link>
                                </p>
                            </div>
                        </div>
                        
                        
                        <div id="login-placeholder"></div>


                    </div>
                    
            )
        }
    }
}

export default Splash;