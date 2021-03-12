import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import logo from '../../assets/quiz.svg';
import { NavProp } from '../../componentTypes';
import './nav.scss';

type UserData = {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
};

const Nav = ({ setPage }: NavProp) => {
  const [log, setLog] = useState(false);
  const [userData, setUserData] = useState<UserData | null>();

  const handleLoginSuccess = (response: any) => {
    const data = response.profileObj;
    const stringData = JSON.stringify(data);
    localStorage.setItem('quiz-user-info', stringData);
    setLog(true);
  };

  useEffect(() => {
    const localData = localStorage.getItem('quiz-user-info');
    const parsedData = localData && JSON.parse(localData);
    setUserData(parsedData);
  }, [log]);

  const handleLoginFail = () => {
    console.log('failed');
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem('quiz-user-info');
    setLog(false);
  };

  console.log('xxx--', userData);

  const googleClient = process.env.REACT_APP_GOOGLE_API as string;
  return (
    <div className="nav">
      <img onClick={() => setPage('home')} className="logo" src={logo} alt="logo" />
      {!userData ? (
        <GoogleLogin
          clientId={googleClient}
          buttonText="Login"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFail}
          cookiePolicy={'single_host_origin'}
        />
      ) : (
        <GoogleLogout clientId={googleClient} buttonText="Log Out" onLogoutSuccess={handleLogout} />
      )}
    </div>
  );
};

export default Nav;
