import React from 'react';

import Form from 'components/form';

import './contact-form.scss';

const initialFormState = {
  amount: 0,
  paymentInfo: {
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    city: '',
  },
};

const ContactForm = (): JSX.Element => (
  <div className="contact-form__wrapper ">
    <h1 className="contact-form-header">REACH OUT TO US WITH ANY QUESTIONS</h1>
    <Form
      formFields={initialFormState}
      render={(): JSX.Element => (
        <div className="placeholder--form">
          EMPTY FOR NOW UNTIL WE HAVE IATS OR SOME PAYMENT SYSTEM SET UP{' '}
        </div>
      )}
    />
  </div>
);

export default ContactForm;
