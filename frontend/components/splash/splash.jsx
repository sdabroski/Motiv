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
                    <div className="splash-outer">
                        <div class=".text-container">
                            <h1 id="header-text">The #1 app for runners and cyclists</h1>
                        </div>
                        <div>
                            <div>
                                <img id= "phone-image" src="https://bit.ly/2Wjmiil"></img>
                            </div>
                            <div>

                            </div>
                        </div>
                        
                        
                        <div id="login-placeholder"></div>


                    </div>
                    
            )
        }
    }
}

export default Splash