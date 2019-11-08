import React from 'react';

import RegisterForm from './RegisterForm/RegisterForm';
import CallForAction from '../../../../components/CallForAction/CallForAction';

interface RegisterProps {
  signInHandler: () => void;
}

const Register: React.FC<RegisterProps> = ({ signInHandler }) => (
  <div>
    <RegisterForm />
    <CallForAction
      question='Already Have an Account?'
      answer='Login Here!'
      onClickHandler={signInHandler}
    />
  </div>
);

export default Register;
