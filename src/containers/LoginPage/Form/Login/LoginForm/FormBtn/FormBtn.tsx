import React from 'react';

interface FormBtnProps {
  text: string
}

const FormBtn: React.FC<FormBtnProps> = ({ text }) => (
  <button
    className="login-page__form--submit-btn"
    type="submit"
  >
    {text}
  </button>
);

export default FormBtn;
