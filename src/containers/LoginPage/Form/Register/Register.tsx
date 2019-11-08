import React from 'react';

import RegisterForm from './RegisterForm/RegisterForm';

interface RegisterProps {
  signInHandler: () => void;
}

const Register: React.FC<RegisterProps> = ({ signInHandler }) => (
  <div>
    <RegisterForm />
  </div>
);

export default Register;
