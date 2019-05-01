import React from 'react';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const login = this.props.login;
        let user = this.state;
        login(user);
    }

    render(){

        return(
            <div>
                <h2>CREATE AN ACCOUNT</h2>
                <ul>
                    <li>We never save credit card information.</li>
                    <li>Registering makes checkout fast and easy and saves your order information to your account</li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="firstName">FIRST NAME</label>
                    <input id="firstName" type="text" onChange={this.update("firstName")}/>
                    <label htmlFor="lastName">LAST NAME</label>
                    <input id="lastName" type="text" onChange={this.update("lastName")}/>
                    <label htmlFor="email-signup">EMAIL*</label>
                    <input id="email-signup" type="text" onChange={this.update("email")}/>
                    <label htmlFor="password-signup" onChange={this.update("password")}>PASSWORD*</label>
                    <input id="password-signup" type="password" />
                    <button>REGISTER</button>
                </form>
                <h6>* REQUIRED FIELDS</h6>
            </div>
        );
    }
}

export default SignupForm;