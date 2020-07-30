import React from 'react';
import Form from '@components/form/_form';
import { LoadingButton } from '@components/LoadingButton';
import { useSendEmail } from '@store/sendEmail';
import { FormInput } from '@components/FormInput';
import './contact-form.scss';

const ContactFormInitalValues = {
  firstName: '',
  lastName: '',
  subject: '',
  emailAddress: '',
  message: '',
};

const ContactForm = (): JSX.Element => {
  const { loading, sendEmail } = useSendEmail();

  const onSubmit = async (
    values: typeof ContactFormInitalValues,
    event: React.BaseSyntheticEvent
  ) => {
    const payload = Object.assign(
      {},
      {
        senderEmail: values.emailAddress,
        senderName: `${values.firstName} ${values.lastName}`,
        emailSubject: values.subject,
        message: values.message,
      }
    );

    const clearForm = () => event.target.reset();

    sendEmail(payload, clearForm);
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
            <LoadingButton
              isLoading={loading}
              type="submit"
              className="contact-form--button"
              text="SUBMIT"
            />
          </form>
        )}
      />
    </div>
  );
};

export default ContactForm;
