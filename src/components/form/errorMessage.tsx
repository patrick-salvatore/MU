import React from 'react';
import Alert from '@components/form/alert.svg';

const ErrorMessage = ({ error }: { error: string }): JSX.Element => (
  <div className="error-wrapper">
    <Alert />
    <p>{error}</p>
  </div>
);
export default ErrorMessage;
