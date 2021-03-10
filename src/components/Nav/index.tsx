import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

import logo from '../../assets/quiz.svg';
import { NavProp } from '../../componentTypes';
import './nav.scss';

const Nav = ({ setPage }: NavProp) => {
  const [data, setData] = useState([]);

  const handleLoginSuccess = () => {
    console.log('success');
  };

  const handleLoginFail = () => {
    console.log('failed');
  };

  const googleClient = process.env.REACT_APP_GOOGLE_API as string;
  return (
    <div className="nav">
      <img onClick={() => setPage('home')} className="logo" src={logo} alt="logo" />
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
