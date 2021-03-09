import React from 'react';
import { GoogleLogin } from 'react-google-login';

import logo from '../../assets/quiz.svg';
import './nav.scss';

const Nav = () => {
  const handleLoginSuccess = () => {
    console.log('success');
  };

  const handleLoginFail = () => {
    console.log('failed');
  };

  const googleClient = process.env.REACT_APP_GOOGLE_API as string;
  return (
    <div className="nav">
      <img className="logo" src={logo} alt="logo" />
      <GoogleLogin
        clientId={googleClient}
        buttonText="Login"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFail}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Nav;
