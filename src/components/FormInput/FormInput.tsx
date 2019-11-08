import React from 'react';

interface FormInputProps {
  inputType: string,
  holder: string
}

const FormInput: React.FC<FormInputProps> = ({ inputType, holder }) => (
  <input
    className="form--inputs"
    type={inputType}
    placeholder={holder}
    required
  />
);

export default FormInput;
