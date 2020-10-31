import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import { auth, provider } from '../firebase';

function Login() {
  const signIn = e => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg" alt="" />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}
export default Login
