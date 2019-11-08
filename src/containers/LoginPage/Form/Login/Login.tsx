import React from 'react';

import LoginForm from './LoginForm/LoginForm';
import RegisterBtn from './RegisterBtn/RegisterBtn';

const Login: React.FC = () => {
  return (
    <div>
      <LoginForm />
      <RegisterBtn />
    </div>
  );
}

export default Login;
