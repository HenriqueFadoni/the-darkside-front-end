import React, { useState } from 'react';
import axios from 'axios';

import RegisterForm from './RegisterForm/RegisterForm';
import CallForAction from '../../../../components/CallForAction/CallForAction';
import ErrorAlert from './ErrorAlert/ErrorAlert';

interface RegisterProps {
  signInHandler: () => void;
}

const Register: React.FC<RegisterProps> = ({ signInHandler }) => {
  const [error, setError] = useState(false);

  const onSubmitHandler = async (email: string, password: string) => {
    try {
      const key = process.env.REACT_APP_FIREBASE_API_KEY;
      const path = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
      const subsData = {
        email: email,
        password: password,
        returnSecureToken: true
      }
      const { data } = await axios.post(path, subsData);

    } catch (error) {
      setError(true)
    }
  }

  const errorHandler = (
    <ErrorAlert />
  )

  return (
    <div>
      {error && errorHandler}
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
