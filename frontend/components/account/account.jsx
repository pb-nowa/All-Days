import React from 'react';
import LoginForm from './login_form';
import SignupForm from './signup_form';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const Account = ({ login, signup, logout, currentUser, errors }) => {
  
  const forms = () => (
    <div className="forms-page">
      <LoginForm login={login} errors={errors}/>
      <SignupForm signup={signup} errors={errors}/>
      <footer></footer>
    </div>
  )

  const myAccount = () => (
    <div className="forms-page">
      <div className="my-account-page">
        <div className="my-account-page-header">
          <h1>My Account</h1>
          <input type="submit" className="sign-out" value="LOGOUT" onClick={logout}/>
        </div>
        <div className="my-account-page-body">
          <div className="order">You haven't placed any orders yet.</div>
          <div className="user-info">
            <div>WELCOME</div>
            <div>{currentUser}</div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  )

  return currentUser ? myAccount() : forms()

}

export default Account;