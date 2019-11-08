import React from 'react';

import LoginForm from './LoginForm/LoginForm';
import CallForAction from '../../../../components/CallForAction/CallForAction';

interface LoginProps {
  signUpHandler: () => void;
}

const Login: React.FC<LoginProps> = ({ signUpHandler }) => {
  return (
    <div>
      <LoginForm />
      <CallForAction 
        question='Doesn`t Have an Account?'
        answer='Create Here!'
        onClickHandler={signUpHandler} 
      />
    </div>
  );
}

export default Login;
