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
                    <div>
                        <div class=".text-container">
                            <h1 id="header-text">The #1 app for runners and cyclists</h1>
                        </div>
                        <div id= "splash-bottom-div">
                            <div>
                                <img id= "phone-image" src="https://bit.ly/2Wjmiil"></img>
                            </div>
                            <div id="splash-button-container">
                                 <Link to="/" className="splash-signup-button" id="splash-demo-button">Demo Log In</Link>
                                 <Link to="/" className="splash-signup-button" id="splash-login-button">Log In With Email</Link>
                                 <div id="or-divider">or</div> 
                                 <Link to="/" className="splash-signup-button" id="splash-signup-button">Sign Up</Link>
                                <p id="splash-disclaimer-text"> By signing up for Strava, you agree to the <br/>
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

export default Splash