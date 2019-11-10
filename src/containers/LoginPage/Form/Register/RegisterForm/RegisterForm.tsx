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
  const [incorrectEmail, setincorrectEmail] = useState(false);
  const [incorrectPass, setincorrectPass] = useState(false);

  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;

    if (newEmail.trim() === '' || !newEmail.includes('@')) {
      setincorrectEmail(true);
    } else if (incorrectEmail) {
      setincorrectEmail(false);
    }

    setEmail(newEmail);
  }

  const onPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;

    if (newPassword.trim() === '') {
      setincorrectPass(true);
    } else if (newPassword === secondPassword) {
      setincorrectPass(false);
    }

    setPassword(newPassword);
  }

  const onSecondPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSecondPassword = e.target.value;

    if (newSecondPassword.trim() === '' || password !== newSecondPassword) {
      setincorrectPass(true);
    } else if (password === newSecondPassword) {
      setincorrectPass(false);
    }

    setSecondPassword(newSecondPassword);
  }

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    if (password === secondPassword) {
      setincorrectPass(false);
      onSubmitHandler(email, password);
    } else if (password !== secondPassword) {
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
        isIncorrect={incorrectEmail}
      />
      <FormInput
        inputType="password"
        name="password"
        holder="Password"
        onChangeHandler={onPasswordChangeHandler}
        isIncorrect={incorrectPass}
      />
      <FormInput
        inputType="password"
        name="password-repeat"
        holder="Password"
        onChangeHandler={onSecondPasswordChangeHandler}
        isIncorrect={incorrectPass}
      />
      <FormBtn text="REGISTER" />
    </form>
  )
};

export default RegisterForm;
