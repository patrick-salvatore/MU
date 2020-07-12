import React from 'react';
import './footer.scss';
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library,
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { AnchorTag } from '@components/anchorTag/anchorTag';

library.add(faFacebook, faTwitter, faInstagram);

const facebookLookup: IconLookup = { prefix: 'fab', iconName: 'facebook' };
const facebookIconDefinition: IconDefinition = findIconDefinition(
  facebookLookup
);

const twitterLookup: IconLookup = { prefix: 'fab', iconName: 'twitter' };
const twitterIconDefinition: IconDefinition = findIconDefinition(twitterLookup);

const instagramLookup: IconLookup = { prefix: 'fab', iconName: 'instagram' };
const instagramIconDefinition: IconDefinition = findIconDefinition(
  instagramLookup
);

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="text--green">
        Questions? Contact us at{' '}
        <a href="mailto:info@friendsofmercyhustrowing.com">
          <u>info@friendsofmercyhustrowing.com</u>
        </a>
      </p>
      <p className="text">
        <span className="yellow">GILLARD ROWING CENTER</span> - FINDLEY LAKE, NY
        14736
      </p>
      <p className="text">
        ©CopyRight {currentYear} - Friends of Mercyhurst Rowing
      </p>
      <div className="social-media">
        <AnchorTag
          href="https://www.facebook.com/MercyhurstRowing"
          newTab={true}
        >
          <FontAwesomeIcon
            icon={facebookIconDefinition}
            className="social-media__icon fab fa-facebook-f"
          />
        </AnchorTag>
        <AnchorTag href="https://twitter.com/hurstrowing" newTab={true}>
          <FontAwesomeIcon
            icon={twitterIconDefinition}
            className="social-media__icon fab fa-twitter"
          />
        </AnchorTag>
        <AnchorTag
          href="https://www.instagram.com/mercyhurst_lightmen/?hl=en"
          newTab={true}
        >
          <FontAwesomeIcon
            icon={instagramIconDefinition}
            className="social-media__icon fab fa-instagram"
          />
        </AnchorTag>
      </div>
    </footer>
  );
};
