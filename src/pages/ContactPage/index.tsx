import React from 'react';
// import { Link } from 'react-router-dom';

import { PageContainer } from '@styledComponents/containers';
import ContactEmailForm from './contact-form';

import './ContactPage.scss';

const Contactpage: React.FC = (): JSX.Element => {
  return (
    <PageContainer>
      <div className="contact-page">
        <div className="contact__wrapper">
          <ContactEmailForm />
          <div className="map__wrapper">
            <h2 className="map-header">OUR BOATHOUSE</h2>
            <p className="map-address">
              Gillard Rowing Center, Findley Lake, NY 14736
            </p>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.7599179625063!2d-79.72880478477775!3d42.11261235868503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882d5fd9ebb2c555%3A0xbe943b974364579f!2sGillard%20Rowing%20Center!5e0!3m2!1sen!2sus!4v1591673307110!5m2!1sen!2sus"
                width="500"
                height="350"
                frameBorder="0"
                allowFullScreen={false}
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
        <div className="donation-button__wrapper">
          {/* <Link to="/donate" className="donation-button">
            donate
          </Link> */}
        </div>
      </div>
    </PageContainer>
  );
};

export default React.memo(Contactpage);
