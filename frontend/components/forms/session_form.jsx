import React from 'react'
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
            this.state[field] = e.target.value
        );
    }

    linkType(){
        if(this.props.formType === "login"){
            return <Link to={'/signup'} value='signup'>Signup</Link>
        } else {
            return < Link to={'/login'} value='login' > Login</Link>
        }
    };

    render(){

        return (
        <div>
            <h2>Feel free to {this.props.formType}</h2>
            <form onSubmit={this.handleSubmit}>
                <label> Email:
                    <input type="text" value={this.state.email} onChange={this.update("email")}/>
                </label>
                <br/>
                <label> Password:
                    <input type="text" value={this.state.password} onChange={this.update("email")}/>
                </label>
                <br/>
                <label>Link Goes Here:
                    {this.linkType()}
                </label>
            </form>
        </div>
        );
    }

}


export default SessionForm;
