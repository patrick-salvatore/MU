import { memo } from 'react';
import { useForm } from 'react-hook-form';

export type Register = ReturnType<typeof useForm>['register'];
export type Error = ReturnType<typeof useForm>['errors'];
export type HandleSubmit = ReturnType<typeof useForm>['handleSubmit'];
export type SetValue = ReturnType<typeof useForm>['setValue'];
export type Control = ReturnType<typeof useForm>['control'];

export interface FormProps {
  formFields: Record<string, string | number>;
  render: ({
    register,
    handleSubmit,
    errors,
    setValue,
    setError,
    clearError,
  }) => any;
  className?: string;
}

export type ContactFormFieldValues = {
  firstName: string;
  lastName: string;
  subject: string;
  emailAddress: string;
  message: string;
};

export const registerEmail = reg =>
  reg({
    required: {
      value: true,
      message: 'Please enter your email',
    },
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'Please enter a proper email',
    },
  });

export const registerWithValidation = (
  reg,
  message,
  validationRegex = /^\d*[a-zA-Z][a-zA-Z0-9]*$/
) =>
  reg({
    pattern: {
      value: validationRegex,
      message: message,
    },
  });

export const registerRequiredWithMessage = (reg, msg: string) =>
  reg({
    required: {
      value: true,
      message: msg,
    },
  });

const Form = ({ render, formFields }: FormProps) => {
  const {
    register,
    errors,
    handleSubmit,
    setValue,
    setError,
    clearError,
  } = useForm({
    defaultValues: formFields,
  });

  return render({
    register,
    handleSubmit,
    errors,
    setValue,
    setError,
    clearError,
  });
};

export default memo(Form);
