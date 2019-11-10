import React, { useState } from 'react';

import FormInput from '../../../../../components/FormInput/FormInput';
import FormBtn from '../../../../../components/FormBtn/FormBtn';

interface RegisterFormProps {
  onSubmitHandler: (email: string, password: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmitHandler }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [secondPassword, setSecondPassword] = useState();
  const [incorrectPass, setincorrectPass] = useState(false);

  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const onSecondPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondPassword(e.target.value);
  }

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    if (password === secondPassword) {
      onSubmitHandler(email, password);
    } else if (password !== secondPassword){
      setincorrectPass(true);
    }
  }

  return (
    <form
      onSubmit={onSubmitForm}
      className="form--fields"
    >
      <FormInput
        inputType="email"
        name="email"
        holder="E-mail"
        onChangeHandler={onEmailChangeHandler}
      />
      <FormInput
        inputType="password"
        name="password"
        holder="Password"
        onChangeHandler={onPasswordChangeHandler}
      />
      <FormInput
        inputType="password"
        name="password-repeat"
        holder="Password"
        onChangeHandler={onSecondPasswordChangeHandler}
      />
      <FormBtn text="REGISTER" />
    </form>
  )
};

export default RegisterForm;
