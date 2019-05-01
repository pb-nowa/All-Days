import React from 'react';
import LoginForm from './login_form';
import SignupForm from './signup_form';

const AccountForm = (props) => (

  <div>
    <LoginForm login={props.login} />
    <SignupForm signup={props.signup} />
  </div>

)

export default AccountForm;