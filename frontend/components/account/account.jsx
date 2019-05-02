import React from 'react';
import LoginForm from './login_form';
import SignupForm from './signup_form';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const Account = ({ login, signup, logout, currentUser, errors }) => {
  
  const forms = () => (
    <div className="forms-page">
      <LoginForm login={login} errors={errors}/>
      <SignupForm signup={signup} errors={errors}/>
    </div>
  )

  const myAccount = () => (
    <div className="forms-page">
      <h2>My Account</h2>
      <input type="submit" className="submit" value="SIGN OUT" onClick={logout}/>
    </div>
  )

  return currentUser ? myAccount() : forms()

}

export default Account;