import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../store/actions/index';

import RegisterForm from './RegisterForm/RegisterForm';
import CallForAction from '../../../../components/CallForAction/CallForAction';
import ErrorAlert from './ErrorAlert/ErrorAlert';

interface RegisterProps {
  signInHandler: () => void;
}

const Register: React.FC<RegisterProps> = ({ signInHandler }) => {
  const { registerSuccess, error } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const onSubmitHandler = async (email: string, password: string) => {
    dispatch(actions.registerUser(email, password));
  }

  const errorHandler = (
    <ErrorAlert />
  )

  if (registerSuccess) signInHandler();
  
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
