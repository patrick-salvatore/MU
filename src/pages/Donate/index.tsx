import React from 'react';
import './Donate.scss';
import DonationForm from './donation-form';

const TextSection = () => (
  <section className="donate--text__wrapper">
    <h1 className="donate--title">
      SUPPORT
      <br /> THE TEAM
    </h1>
    <h1 className="donate--sub-title">DONATIONS</h1>
    <div className="donate--section">
      <p className="donate--section--text">
        Thank you for considering a donation to the Friends of Mercyhurst
        Rowing. There are several easy ways to make a charitable contribution to
        the team. If you are giving a gift to the team via a route other than
        our online form and would like to make sure that it counts towards the
        Class Challenge, please email{' '}
        <a href="treasurer@friendsofmercyhurstrowing.org">
          <u>treasurer@friendsofmercyhurstrowing.org</u>
        </a>{' '}
        for details about your donation.
      </p>
    </div>
    <div className="donate--section">
      <h2 className="donate--section--title">Company Match Donations</h2>
      <p className="donate--section--text">
        Curious whether your company offers matching donations? Check this link
        here! If you are expecting a matching donation from your company, make
        sure you indicate so in our online form as well as email{' '}
        <em>
          <strong>both</strong>
        </em>{' '}
        <a href="mailto:vp@friendsofmercyhurstrowing.org">
          <u>vp@friendsofmercyhurstrowing.org</u>
        </a>{' '}
        and{' '}
        <a href="treasurer@friendsofmercyhurstrowing.org">
          <u>treasurer@friendsofmercyhurstrowing.org</u>
        </a>{' '}
        for details about your donation.
      </p>
    </div>
    <div className="donate--section">
      <h2 className="donate--section--title">Donate Online</h2>
      <p className="donate--section--text">
        Fill in our form and use your bank account or credit card in a secure
        environment (alumni and parents, be sure to select your class year to
        receive credit for the annual Class Challenge).{' '}
        <em>
          <strong>
            We are excited to now offer an easy way of setting up recurring
            donations.
          </strong>
        </em>{' '}
        Our new payment processor offers a very low fixed fee for direct
        debiting of bank accounts compared to their fees for credit card
        transactions. A very easy way to contribute to our team of stellar
        athletes is to set up recurring monthly donations through your bank
        account, making donations easier as well as contributing more of your
        actual gift towards helping the athletes.
      </p>
    </div>
    <div className="donate--section">
      <h2 className="donate--section--title">Donate by Mail</h2>
      <p className="donate--section--text">
        Mail checks to the address below (if donating on behalf of a rower or
        coxswain, please write the graduation year and athlete’s name in the
        memo line):
      </p>
      <div className="donate--section--address">
        <p>WHAT</p> <br /> <p>ADDRESS</p> <br /> <p>GOES HERE?</p>
      </div>
    </div>
    <div className="donate--section">
      <h2 className="donate--section--title">Donate Through Amazon.com</h2>
      <p className="donate--section--text">
        When you visit Amazon, if you go to{' '}
        <a href="https://smile.amazon.com">smile.amazon.com,</a> instead of just
        amazon.com, any purchases you make will donate 0.5% of the sale price to
        the 501(c)(3) of your choice (at no extra cost to you). All you have to
        do is designate &quot;Friends of Mercyhurst Rowing&quot; as the
        supporting charity.
      </p>
    </div>
  </section>
);

const Donate = (): JSX.Element => {
  return (
    <div className="donate__container">
      <DonationForm />
      <TextSection />
    </div>
  );
};

export default Donate;
