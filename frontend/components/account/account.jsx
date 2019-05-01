import React from 'react';
import LoginForm from './login_form';
import SignupForm from './signup_form';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const Account = ({ login, signup, logout, currentUser }) => {
  
  const forms = () => (
    <div className="forms-page">
      <LoginForm login={login} />
      <SignupForm signup={signup} />
    </div>
  )

  const myAccount = () => (
    <div>
      <h2>My Account</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  )

  return currentUser ? myAccount() : forms()

}

export default Account;