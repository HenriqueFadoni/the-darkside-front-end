import React from 'react';

interface FormInputProps {
  inputType: string,
  name: string,
  holder: string
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput: React.FC<FormInputProps> = ({ inputType, name, holder, onChangeHandler }) => (
  <input
    className="form--inputs"
    type={inputType}
    name={name}
    onChange={onChangeHandler}
    placeholder={holder}
    required
  />
);

export default FormInput;
