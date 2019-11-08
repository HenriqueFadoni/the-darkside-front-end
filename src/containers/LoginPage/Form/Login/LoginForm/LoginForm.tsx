import React from 'react';

import FormInput from '../../../../../components/FormInput/FormInput';
import FormBtn from '../../../../../components/FormBtn/FormBtn';

const LoginForm: React.FC = () => (
  <form className="form--fields">
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