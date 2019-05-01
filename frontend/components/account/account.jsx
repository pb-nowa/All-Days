import React from 'react';
import LoginForm from './login_form';
import SignupForm from './signup_form';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const Account = ({ login, signup, ownProps, state, logout }) => (

  <div>
    <LoginForm login={login} />
    <SignupForm signup={signup} />
    <button onClick={logout}>Log Out</button>
  </div>

)

export default Account;