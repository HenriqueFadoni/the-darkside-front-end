import React, { useState } from 'react';

import AnimatedLogo from './AnimatedLogo/AnimatedLogo';
import Login from './Login/Login';
import Register from './Register/Register';

const Form: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const signUpHandler = () => {
    setIsLogin(false);
  }

  const signInHandler = () => {
    setIsLogin(true);
  }

  return (
    <div className="form--container">
      <AnimatedLogo />
      {
        isLogin
          ? <Login signUpHandler={signUpHandler} />
          : <Register signInHandler={signInHandler} />
      }
    </div>
  );
}

export default Form;
