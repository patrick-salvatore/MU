import React from 'react';

interface FormSectionProps {
  title: string;
  name: string;
  required?: boolean;
}

export const FormSection: React.FC<FormSectionProps> = ({
  children,
  title,
  name,
  required,
}) => {
  return (
    <div className="form-section--container">
      <label htmlFor={`input--${name}`} className="form-section--label">
        {title}
        {required && <span>*</span>}
      </label>
      <div id={`input--${name}`} className={`form-section--${name}`}>
        {children}
      </div>
    </div>
  );
};
