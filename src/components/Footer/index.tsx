import React from 'react';
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library,
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { AnchorTag } from '@components/anchorTag/anchorTag';
import './footer.scss';

library.add(faFacebook, faLinkedin, faInstagram);

const facebookLookup: IconLookup = { prefix: 'fab', iconName: 'facebook' };
const facebookIconDefinition: IconDefinition = findIconDefinition(
  facebookLookup
);

const linkeInLookup: IconLookup = { prefix: 'fab', iconName: 'linkedin' };
const linkeinIconDefinition: IconDefinition = findIconDefinition(linkeInLookup);

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
        ©Copyright {currentYear} - Friends of Mercyhurst Rowing
      </p>
      <div className="social-media">
        <AnchorTag
          href="https://www.facebook.com/friendsofmercyhurstrowing/"
          newTab={true}
        >
          <FontAwesomeIcon
            icon={facebookIconDefinition}
            className="social-media__icon fab fa-facebook-f fa-2x"
          />
        </AnchorTag>
        <AnchorTag href="https://twitter.com/hurstrowing" newTab={true}>
          <FontAwesomeIcon
            icon={linkeinIconDefinition}
            className="social-media__icon fab fa-linkedin fa-2x"
          />
        </AnchorTag>
        <AnchorTag
          href="https://www.instagram.com/mercyhurst_lightmen/?hl=en"
          newTab={true}
        >
          <FontAwesomeIcon
            icon={instagramIconDefinition}
            className="social-media__icon fab fa-instagram fa-2x"
          />
        </AnchorTag>
      </div>
    </footer>
  );
};
