import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import logo from '../../assets/quiz.svg';
import { NavProp, UserData } from '../../componentTypes';

import './nav.scss';

const Nav = ({ setPage }: NavProp) => {
  const [log, setLog] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  const googleClient = process.env.REACT_APP_GOOGLE_API as string;
  return (
    <div className="nav">
      <img onClick={() => setPage('home')} className="nav__logo" src={logo} alt="logo" />
      {!userData ? (
        <GoogleLogin
          clientId={googleClient}
          buttonText="Login"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFail}
          cookiePolicy={'single_host_origin'}
        />
      ) : (
        <div className="nav__log-div">
          <GoogleLogout
            clientId={googleClient}
            buttonText="Log Out"
            onLogoutSuccess={handleLogout}
          />
          <div className="nav__profile-div">
            <img className="nav__profile-img" src={userData.imageUrl} alt={userData.imageUrl} />
            <p className="nav__profile-name">{` Hi ${userData.givenName}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
