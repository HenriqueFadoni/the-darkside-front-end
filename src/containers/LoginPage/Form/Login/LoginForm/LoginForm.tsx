import React, { useState } from 'react';

import FormInput from '../../../../../components/FormInput/FormInput';
import FormBtn from '../../../../../components/FormBtn/FormBtn';

const LoginForm: React.FC = () => {
  return (
    <form className="form--fields">
      <FormInput
        inputType="email"
        name="email"
        holder="E-mail"
        onChangeHandler={e => console.log(e)}
      />
      <FormInput
        inputType="password"
        name="password"
        holder="Password"
        onChangeHandler={e => console.log(e)}
      />
      <FormBtn text="LOGIN" />
    </form>
  )
};

export default LoginForm;
