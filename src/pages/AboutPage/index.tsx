import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './about-page.scss';

import about from 'img/about.png';

const AboutPage: React.FC = (): JSX.Element => {
  return (
    <div className="about__wrapper">
      <div className="about-content__wrapper">
        <div className="about--image__wrapper">
          <LazyLoadImage src={about} className="about--image" />
        </div>
        <div className="about-text__wrapper">
          <div className="text--title">WHO WE ARE</div>
          <p className="text">
            Friends of Mercyhurst Rowing is a 501(c)(3) non-profit organization,
            representing the alumni and friends of the Mercyhurst University
            Rowing Team. Our members work together to support the team and its
            mission to provide an environment in which the athletes of the team
            can train, grow, and represent Mercyhurst University in
            intercollegiate competitions.
          </p>
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

export default React.memo(AboutPage);
