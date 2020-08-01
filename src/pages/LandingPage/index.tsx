import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import './LandingPage.scss';
import {
  ColumnContainer,
  FullPageContainer,
} from '@styledComponents/containers';

import LandingModal from '@components/FirstLandingModal';
import { InstagramFeed } from '@components/InstagramFeed';

import lpBgImg from '@img/landing-page.png';
import oars from '@img/oars2.png';
import whoWeAreImg1 from '@img/whoWeAreImg1.jpg';
import whoWeAreImg2 from '@img/received_10204283795090061.png';

const LandingPage: React.FC = (): JSX.Element => {
  return (
    <div className="lp__wrapper">
      <FullPageContainer>
        <ColumnContainer>
          <section
            className="lp__top__wrapper"
            style={{
              background: `url(${lpBgImg}) no-repeat center`,
              backgroundSize: 'cover',
            }}
          >
            <div className="top__title__wrapper">
              <h1 className="title">FRIENDS OF MERCYHURST ROWING</h1>
            </div>
          </section>
        </ColumnContainer>
      </FullPageContainer>
      <section className="lp__bottom__wrapper">
        <div className="donation__wrapper">
          <h1 className="donation-title">laker pride</h1>
          <p className="donation-text">
            FOMR provides the necessary support and guidance to allow our
            ambitious, Mercyhurst Rowing Team — comprised of hard working
            student athletes of the Meryhurst University Rowing team — to push
            competitive and athletic boundaries, seeking new ways to race and
            win.
          </p>
          <Link to="/donate" className="donation-button">
            donate to the team
          </Link>
        </div>
      </section>
      <LazyLoadImage className="banner_img" src={oars} />
      <FullPageContainer>
        <ColumnContainer>
          <section className="lp__middle__wrapper">
            <div className="middle_header__wrapper">
              <h1 className="middle-content__header">who are we</h1>
              <p className="middle-content__text">
                The Mercyhurst Rowing Association is a 501(c)(3) non-profit
                organization representing the alumni and friends of the
                University of Mercyhurst Rowing Team. Our members work together
                to support the team and its mission to provide an environment in
                which the athletes of the team can train, grow, and represent
                the university in intercollegiate competition.
              </p>
            </div>
            <div className="middle_imgs__wrapper">
              <div className="middle_img__wrapper">
                <LazyLoadImage className="middle_img" src={whoWeAreImg1} />
                <p className="img__text">
                  2016 Dad Vail Lightweight Eight Champions: Jonas Weller,
                  Nemanja Uzanovic, Zackary Ghalayini, Johnathan Blazevic, Galen
                  Bernick, Christopher Gough, Milos Veres, Nemanja Matijevic
                </p>
              </div>
              <div className="middle_img__wrapper">
                <LazyLoadImage className="middle_img" src={whoWeAreImg2} />
                <p className="img__text">
                  The Mercyhurst boat fleet down in Eufaula, Alabama during the
                  annual spring break training camp.
                </p>
              </div>
            </div>
          </section>
        </ColumnContainer>
      </FullPageContainer>
      <InstagramFeed />
    </div>
  );
};

const LandingPageContainer = () => (
  <>
    <LandingModal />
    <LandingPage />
  </>
);

export default LandingPageContainer;
