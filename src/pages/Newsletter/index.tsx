import React from 'react';
import Form from 'components/form';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { FullPageContainer } from 'styledComponents/containers';
import './Newsletter.scss';

import newsletterImg from 'img/newsletter.jpg';

const initialFormState = {
  firstName: '',
  lastName: '',
};

const Newsletter: React.FC = (): JSX.Element => {
  return (
    <div className="newsletter-page">
      <div className="newsletter__wrapper">
        <div className="nl-img__wrapper">
          <LazyLoadImage
            className="nl--img"
            src={newsletterImg}
          ></LazyLoadImage>
        </div>
        <div className="nl-form__wrapper">
          <h2 className="form--header">FOMR NEWSLETTER</h2>
          <p>
            Fill out the form below to stay up to date with MRA news about the
            team and alumn!
          </p>
          <p>
            We will not share your information with anyone and will only use it
            to keep you up to date about team news and fundraising.
          </p>
          <FullPageContainer>
            <Form
              formFields={initialFormState}
              render={(): JSX.Element => (
                <div className="placeholder--form">
                  EMPTY FOR NOW UNTIL WE HAVE MAILCHIMP / OTHER NEWSLETTER
                  SERVICE SYSTEM SET UP{' '}
                </div>
              )}
            />
          </FullPageContainer>
        </div>
      </div>
      <div className="donation-button__wrapper">
        <Link to="/donate" className="donation-button">
          donate
        </Link>
      </div>
    </div>
  );
};

export default Newsletter;
