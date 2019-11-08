import React from 'react';

import FormInput from './FormInput/FormInput';
import FormBtn from './FormBtn/FormBtn';

const LoginForm: React.FC = () => (
  <form className="login-page__form--fields">
    <FormInput
      inputType="email"
      holder="E-mail"
    />
    <FormInput
      inputType="password"
      holder="Password"
    />
    <FormBtn text="LOGIN" />
  </form>
);

export default LoginForm;
