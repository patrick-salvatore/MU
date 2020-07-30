import React from 'react';
import { Register } from './_form';
import ErrorMessage from './ErrorMessage';

type FormInputType = {
  register: Register;
  name: string;
  className?: string;
  error?: Error;
  as?: string;
  sublabel?: string;
};
const FormInput: React.FC<FormInputType> = ({
  register,
  name,
  className,
  error,
  as,
  sublabel,
}) => {
  const props = { ref: register, name, className, autoComplete: 'off' };
  return (
    <div className="form-input-wrapper">
      {as ? (
        React.createElement(as as string, props)
      ) : (
        <input
          className={className}
          name={name}
          ref={register}
          autoComplete="off"
        />
      )}
      <span className="input-sublabel">{sublabel}</span>
      {error && <ErrorMessage error={error.message} />}
    </div>
  );
};

export default FormInput;
