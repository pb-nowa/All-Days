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
        this.renderErrors = this.renderErrors.bind(this);
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

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={i} className="error">
                        *{error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){  
        return(
            <div className="form" id="sign-up">
                <h2>CREATE AN ACCOUNT</h2>
                <ul>
                    <li>We never save credit card information.</li>
                    <li>Registering makes checkout fast and easy and saves your order information to your account</li>
                </ul>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="firstName">FIRST NAME</label>
                    <input id="firstName" type="text" onChange={this.update("first_name")}/>
                    <label htmlFor="lastName">LAST NAME</label>
                    <input id="lastName" type="text" onChange={this.update("last_name")}/>
                    <label htmlFor="email-signup">EMAIL*</label>
                    <input id="email-signup" type="text" onChange={this.update("email")}/>
                    <label htmlFor="password-signup">PASSWORD*</label>
                    <input id="password-signup" type="password" onChange={this.update("password")}/>
                    <input type="submit" className="submit" value="REGISTER"/>
                </form>
                <p className="notice">This is a demo website, do not store personal information</p>
                <p id="required-fields">* REQUIRED FIELDS</p>
            </div>
        );
    }
}

export default SignupForm;