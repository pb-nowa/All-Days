import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
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
    
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i} className="error">
                        *{error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        return (
            <div className="form" id="login">
                <h2>LOGIN</h2>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email-login">EMAIL</label>
                    <input id="email-login" type="text" onChange={this.update("email")} />
                    <label htmlFor="password-login">PASSWORD</label>
                    <input id="password-login" type="password" onChange={this.update("password")} />
                    <input type="submit" className="submit" value="SIGN IN"/>
                </form>
            </div>
        );
    }
}

export default LoginForm;