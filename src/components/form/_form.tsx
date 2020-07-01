import { memo } from 'react';
import { FormProps } from './interfaces';
import { useForm } from 'react-hook-form';

export type Register = ReturnType<typeof useForm>['register'];
export type Error = ReturnType<typeof useForm>['errors'];

const Form: React.FC<FormProps<any>> = ({ render, formFields }) => {
  const { register, errors, handleSubmit } = useForm(formFields);

  return render({ register, handleSubmit, errors });
};

export default memo(Form);
