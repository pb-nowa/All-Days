import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: "",
                password: ""
            },
            submitted: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState((prevState) => {
            const state = prevState.user;
            return Object.assign({}, state, { [field]: e.currentTarget.value });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const login = this.props.login;
        let user = this.state.user;
        login(user);
        this.setState({ submitted: true });
    }

    demoLogin(e) {
        e.preventDefault();
        const demoLogin = { email: "demouser@demouser.com", password: "demouser" };
        this.setState({
            user: demoLogin
        }, () => {
            const login = this.props.login;
            let user = this.state.user;
            login(user);
            }
        );  
    }
    
    renderErrors() {
        if (this.state.submitted){
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
                <input type="submit" onClick={this.demoLogin} className="submit" value="DEMO LOGIN"/>
            </div>
        );
    }
}

export default LoginForm;