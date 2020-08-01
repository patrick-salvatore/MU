import { memo } from 'react';
import { useForm } from 'react-hook-form';

export type Register = ReturnType<typeof useForm>['register'];
export type Error = ReturnType<typeof useForm>['errors'];
export type HandleSubmit = ReturnType<typeof useForm>['handleSubmit'];

export interface FormProps {
  formFields: Record<string, string | number>;
  render: ({ register, handleSubmit, errors }) => any;
  className?: string;
}

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

const Form = ({ render, formFields }: FormProps) => {
  const { register, errors, handleSubmit } = useForm(formFields);

  return render({ register, handleSubmit, errors });
};

export default memo(Form);
