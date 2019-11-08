import React from 'react';

interface RegisterBtnProps {
  signUpHandler: () => void;
}

const RegisterBtn: React.FC<RegisterBtnProps> = ({ signUpHandler }) => (
  <p className="arciform body-text-2 text-white">
    Doesn't Have an Account?
    <span 
      className="text-purple margin-left-05"
      onClick={signUpHandler}
    >
      Create Here!
    </span>
  </p>
);

export default RegisterBtn;
