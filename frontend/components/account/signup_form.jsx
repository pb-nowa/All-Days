import React from 'react';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => {
            return this.setState({            
            [field]: e.currentTarget.value
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const signup = this.props.signup;
        let user = this.state;
        signup(user);
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
                    <input id="firstName" type="text" onChange={this.update("first_name")}/>
                    <label htmlFor="lastName">LAST NAME</label>
                    <input id="lastName" type="text" onChange={this.update("last_name")}/>
                    <label htmlFor="email-signup">EMAIL*</label>
                    <input id="email-signup" type="text" onChange={this.update("email")}/>
                    <label htmlFor="password-signup">PASSWORD*</label>
                    <input id="password-signup" type="password" onChange={this.update("password")}/>
                    <button className="submit">REGISTER</button>
                </form>
                <h6>* REQUIRED FIELDS</h6>
            </div>
        );
    }
}

export default SignupForm;