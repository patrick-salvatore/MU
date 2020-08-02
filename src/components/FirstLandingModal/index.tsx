import React from 'react';
import Modal from '@components/modal';
import Form, { registerEmail } from '@components/form/_form';
import { Link } from 'react-router-dom';

import OARS from '@img/modal-oars.png';

import './styles.scss';
import { FormInput } from '@components/FormInput';
import { LoadingButton } from '@components/LoadingButton';
import ErrorMessage from '@components/FormErrorMessage';

const subscribeFromFields = {
  email: '',
};
const SubcribeBox = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div className="email-signup--wrapper">
      <h2 className="email-signup--header1">Subscribe to our email list!</h2>
      <p className="email-signup--header2">
        Stay up to date with monthly newsletters and alerts. Enter your email to
        subscribe!
      </p>
      <Form
        formFields={subscribeFromFields}
        render={({ register, handleSubmit, errors }) => (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="email-signup--form"
          >
            <div className="email-signup--form-contents">
              <FormInput register={registerEmail(register)} name="email" />
              <LoadingButton
                isLoading={false}
                type="submit"
                text="Subscribe!"
              />
            </div>
            {errors.email ? (
              <ErrorMessage error={errors.email.message} />
            ) : null}
          </form>
        )}
      />
    </div>
  );
};

const DonateBox = () => {
  return (
    <div className="donate--wrapper">
      <h2>
        Interested in making a donation to support Mercyhurst University Rowing?
      </h2>
      <Link to="/donate" className="donation-button">
        YES!
      </Link>
    </div>
  );
};

const LandingModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    const visited = sessionStorage['alreadyVisited'];
    if (visited) {
      setShowModal(false);
    } else {
      sessionStorage['alreadyVisited'] = true;
      setTimeout(() => setShowModal(true), 8000);
    }

    return () => {
      setShowModal(false);
    };
  }, []);

  return (
    <Modal open={showModal} closeModal={() => setShowModal(false)}>
      <div className="landing-modal-content">
        <SubcribeBox />
        <img src={OARS} className="landing-modal-img" />
        <DonateBox />
      </div>
    </Modal>
  );
};

export default LandingModal;
