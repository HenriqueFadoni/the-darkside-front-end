import React from 'react';

import TopLogo from './TopLogo/TopLogo';
import Form from './Form/Form';
import Footer from './Footer/Footer';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page__container">
      <TopLogo />
      <Form />
      <Footer />
    </div>
  );
}

export default LoginPage;
