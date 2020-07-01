import React from 'react';

import Form, { Register, Error } from 'components/form/_form';
import Alert from 'components/form/alert.svg';
import './contact-form.scss';

const contactFormInitalValues = {
  firstName: '',
  lastName: '',
  emailAddress: '',
  message: '',
};

const ErrorMessage = ({ error }: { error: string }): JSX.Element => (
  <div className="error-wrapper">
    <Alert />
    <p>{error}</p>
  </div>
);

type FormInputType = {
  register: Register;
  name: string;
  className?: string;
  error?: Error;
  as?: string;
};
const FormInput: React.FC<FormInputType> = ({
  register,
  name,
  className,
  error,
  as,
}) => {
  const props = { ref: register, name, className };
  return (
    <div className="form-input-wrapper">
      {as ? (
        React.createElement(as as string, props)
      ) : (
        <input className={className} name={name} ref={register} />
      )}
      {error && <ErrorMessage error={error.message} />}
    </div>
  );
};

const ContactForm = (): JSX.Element => {
  const onSubmit = values => console.log(values);

  return (
    <div className="contact-form__wrapper ">
      <h1 className="contact-form-header">
        REACH OUT TO US WITH ANY QUESTIONS
      </h1>
      <Form
        formFields={contactFormInitalValues}
        render={({ register, handleSubmit, errors }): JSX.Element => (
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-name-wrapper">
              <h3>
                Name<sup>*</sup>
              </h3>
              <FormInput
                register={register({
                  required: {
                    value: true,
                    message: 'Please enter your first name',
                  },
                })}
                name="firstName"
                error={errors.firstName}
              />
              <FormInput
                register={register({
                  required: {
                    value: true,
                    message: 'Please enter your last name',
                  },
                })}
                name="lastName"
                error={errors.lastName}
              />
            </div>
            <h3>
              Email<sup>*</sup>
            </h3>
            <FormInput
              register={register({
                required: {
                  value: true,
                  message: 'Please enter your email',
                },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please enter a proper email',
                },
              })}
              name="emailAddress"
              error={errors.emailAddress}
            />
            <h3>
              Message<sup>*</sup>
            </h3>
            <FormInput
              as="textarea"
              register={register({
                required: {
                  value: true,
                  message: 'Please enter a message to your email',
                },
              })}
              name="message"
              error={errors.message}
            />
            <button type="submit">CLICK</button>
          </form>
        )}
      />
    </div>
  );
};

export default ContactForm;
