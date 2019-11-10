import React from 'react';
import axios from 'axios';

import RegisterForm from './RegisterForm/RegisterForm';
import CallForAction from '../../../../components/CallForAction/CallForAction';

interface RegisterProps {
  signInHandler: () => void;
}

const Register: React.FC<RegisterProps> = ({ signInHandler }) => {
  const onSubmitHandler = async (email: string, password: string) => {
    const key = process.env.REACT_APP_FIREBASE_API_KEY;
    const path = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
    const subsData = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    const { data } = await axios.post(path, subsData);
  }

  return (
    <div>
      <RegisterForm onSubmitHandler={onSubmitHandler} />
      <CallForAction
        question='Already Have an Account?'
        answer='Login Here!'
        onClickHandler={signInHandler}
      />
    </div>
  )
};

export default Register;
