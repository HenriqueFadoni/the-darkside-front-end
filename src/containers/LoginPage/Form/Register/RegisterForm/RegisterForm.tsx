import React from 'react';

import FormInput from '../../../../../components/FormInput/FormInput';
import FormBtn from '../../../../../components/FormBtn/FormBtn';

const RegisterForm: React.FC = () => (
  <form className="form--fields">
    <FormInput
      inputType="email"
      holder="E-mail"
    />
    <FormInput
      inputType="password"
      holder="Password"
    />
    <FormInput
      inputType="password"
      holder="Password"
    />
    <FormBtn text="REGISTER" />
  </form>
);

export default RegisterForm;
