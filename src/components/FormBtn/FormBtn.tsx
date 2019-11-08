import React from 'react';

interface FormBtnProps {
  text: string
}

const FormBtn: React.FC<FormBtnProps> = ({ text }) => (
  <button
    className="purple-btn"
    type="submit"
  >
    {text}
  </button>
);

export default FormBtn;
