import React from 'react';
import { sendEmailApi } from '../../api/send-email';
import Form, { Register, Error } from 'components/form/_form';
import Alert from 'components/form/alert.svg';
import './contact-form.scss';

const ContactFormInitalValues = {
  firstName: '',
  lastName: '',
  subject: '',
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

const ContactForm = (): JSX.Element => {
  const onSubmit = async (values: typeof ContactFormInitalValues) => {
    const payload = Object.assign(
      {},
      {
        senderEmail: values.emailAddress,
        senderName: `${values.firstName} ${values.lastName}`,
        emailSubject: values.subject,
        message: values.message,
      }
    );

    const res = await sendEmailApi(payload);
    console.log(res);
  };

  return (
    <div className="contact-form__wrapper ">
      <h1 className="contact-form-header">
        REACH OUT TO US WITH ANY QUESTIONS
      </h1>
      <Form
        formFields={ContactFormInitalValues}
        render={({ register, handleSubmit, errors }): JSX.Element => (
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-input-container">
              <label
                htmlFor="input--name"
                className="form-input-container--label"
              >
                Your Name<span>*</span>
              </label>
              <div id="input--name" className="form-input-container--name">
                <FormInput
                  register={register({
                    required: {
                      value: true,
                      message: 'Please enter your first name',
                    },
                  })}
                  name="firstName"
                  error={errors.firstName}
                  sublabel="First Name"
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
                  sublabel="Last Name"
                />
              </div>
            </div>
            <div className="form-input-container">
              <label
                htmlFor="input--email"
                className="form-input-container--label"
              >
                Your Email Address<span>*</span>
              </label>
              <div id="input--email" className="form-input-container--email">
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
              </div>
            </div>
            <div className="form-input-container">
              <label
                htmlFor="input--subject"
                className="form-input-container--label"
              >
                Subject
              </label>
              <div
                id="input--subject"
                className="form-input-container--subject"
              >
                <FormInput register={register} name="subject" />
              </div>
            </div>
            <div className="form-input-container">
              <label
                htmlFor="input--message"
                className="form-input-container--label"
              >
                Message<span>*</span>
              </label>
              <div
                id="input--message"
                className="form-input-container--message"
              >
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
              </div>
            </div>
            <button type="submit" className="contact-form--button">
              SUBMIT
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default ContactForm;
