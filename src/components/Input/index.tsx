import React from 'react';

interface InputProps {
  inputClassName?: string;
  labelClassName?: string;
  name: string;
  title?: string;
  // value: string;
  // placeholder: string;
  type?: string;
  ref?: any;
}

const Input: React.FC<InputProps> = (props): JSX.Element => {
  return (
    <>
      <label htmlFor={props.name} className={props.labelClassName}>
        {props.title}
      </label>
      <input
        ref={props.ref || null}
        className={props.inputClassName}
        type={props.type || 'text'}
        name={props.name}
        // value={props.value}
        // placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
