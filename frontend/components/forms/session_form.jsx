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

        return (
        <div>
            <h3>Feel free to {this.props.formType}</h3>
            <label>Or:
                 < Link to={linkType}> {linkValue}</Link>
            </label>
                <br />
                <br />
                <br />
            <form onSubmit={this.handleSubmit}>
                <label> Email:
                    <input type="text" value={this.state.email} onChange={this.update("email")}/>
                </label>
                <br/>
                <label> Password:
                    <input type="text" value={this.state.password} onChange={this.update("password")}/>
                </label>
                <br/>
                <input type="submit" value={`${this.props.formType}!!`}/>
                <br/>
                <br/>
           
            </form>
        </div>
        );
    }

}


export default SessionForm;
