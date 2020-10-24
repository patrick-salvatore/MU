import React from 'react';
import Form, {
  registerEmail,
  registerRequiredWithMessage,
} from '@components/form/_form';
import { LoadingButton } from '@components/LoadingButton';
import { useSendEmail } from '@store/sendEmail';
import { FormInput } from '@components/Inputs/FormInput';
import { FormSection } from '@components/FormSection';

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
            <FormSection title="Your Name" name="name" required>
              <FormInput
                register={registerRequiredWithMessage(
                  register,
                  'Please enter your first name'
                )}
                name="firstName"
                error={errors.firstName}
                sublabel="First Name"
              />
              <FormInput
                register={registerRequiredWithMessage(
                  register,
                  'Please enter your last name'
                )}
                name="lastName"
                error={errors.lastName}
                sublabel="Last Name"
              />
            </FormSection>
            <FormSection title="Your Email Address" name="email" required>
              <FormInput
                register={registerEmail(register)}
                name="emailAddress"
                error={errors.emailAddress}
              />
            </FormSection>
            <FormSection title="Subject" name="subject">
              <FormInput register={register} name="subject" />
            </FormSection>
            <FormSection title="Message" name="message" required>
              <FormInput
                as="textarea"
                register={registerRequiredWithMessage(
                  register,
                  'Please enter a message to your email'
                )}
                name="message"
                error={errors.message}
              />
            </FormSection>
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
