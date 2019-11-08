import React from 'react';

import AnimatedLogo from './AnimatedLogo/AnimatedLogo';
import LoginForm from './LoginForm/LoginForm';

const Form: React.FC = () => {
  return (
    <div className="login-page__form--container">
      <AnimatedLogo />
      <LoginForm />
    </div>
  );
}

export default Form;
