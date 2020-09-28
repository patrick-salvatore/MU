import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { FullPageContainer } from '@styledComponents/containers';

import NewsLetterForm from './newsLetterForm';

import newsletterImg from '@img/newsletter.jpg';
import './Newsletter.scss';

const Newsletter: React.FC = (): JSX.Element => (
  <div className="newsletter-page">
    <div className="newsletter__wrapper">
      <div className="nl-img__wrapper">
        <LazyLoadImage className="nl--img" src={newsletterImg} />
      </div>
      <div className="nl-form__wrapper">
        <h2 className="nl-form--header">FOMR NEWSLETTER</h2>
        <p className="nl-form--text">
          Fill out the form below to stay up to date with MU rowing news about
          the team and alumni!
        </p>
        <p className="nl-form--text">
          We will not share your information with anyone and will only use it to
          keep you up to date about team news and fundraising.
        </p>
        <FullPageContainer>
          <NewsLetterForm />
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

export default Newsletter;
