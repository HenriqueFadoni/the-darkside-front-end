import React from 'react';

import TopLogo from './TopLogo/TopLogo';
import Form from './Form/Form';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page__container">
      <TopLogo />
      <Form />
    </div>
  );
}

export default LoginPage;
