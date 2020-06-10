import React from 'react';
import Form from 'components/form';

import './donation-form.scss';

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

const DonationForm = () => (
  <section className="donate--form__wrapper">
    <h1 className="donate--title">ONLINE DONATION FORM</h1>
    <Form
      formFields={initialFormState}
      render={(): JSX.Element => (
        <div className="placeholder--form">
          EMPTY FOR NOW UNTIL WE HAVE IATS OR SOME PAYMENT SYSTEM SET UP{' '}
        </div>
      )}
    />
  </section>
);

export default DonationForm;
