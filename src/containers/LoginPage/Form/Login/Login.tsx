import React from 'react';

import LoginForm from './LoginForm/LoginForm';
import RegisterBtn from './RegisterBtn/RegisterBtn';

interface LoginProps {
  signUpHandler: () => void;
}

const Login: React.FC<LoginProps> = ({ signUpHandler }) => {
  return (
    <div>
      <LoginForm />
      <RegisterBtn signUpHandler={signUpHandler} />
    </div>
  );
}

export default Login;
