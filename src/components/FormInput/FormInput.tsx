import React from 'react';

interface FormInputProps {
  inputType: string,
  name: string,
  holder: string,
  isIncorrect?: boolean,
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput: React.FC<FormInputProps> = ({ inputType, name, holder, onChangeHandler, isIncorrect = false }) => (
  <input
    className={`form--inputs ${isIncorrect && 'form--incorrect'}`}
    type={inputType}
    name={name}
    onChange={onChangeHandler}
    placeholder={holder}
    required
  />
);

export default FormInput;
