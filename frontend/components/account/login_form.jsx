import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {

        return (
            <div>
                <h2>LOGIN</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email-login">EMAIL</label>
                    <input id="email-login" type="text" onChange={this.update("email")} />
                    <label htmlFor="password-login">PASSWORD</label>
                    <input id="password-login" type="password" onChange={this.update("password")} />
                    <button className="submit">SIGN IN</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;