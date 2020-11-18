import React from 'react';
import './Connect.scss';

const TextSection = (): JSX.Element => (
  <section className="connect__text--wrapper">
    <h1 className="connect--header">CONNECT WITH US</h1>
    <div className="connect__text--container">
      <p>
        We are so grateful for your continued interest in the rowing community.
        No matter when you graduated, we all have on thing in common: rowing.
        Whether it&apos;s early morning practices on Findley, seeing the sun
        before anyone else, cold Presque Isle rows, long bus rides for spring
        training camp, dad vails, and the savoring moment of having a medal
        placed around your neck. What you have seen has been seen by every class
        and generation that follows in your footsteps.
      </p>
      <p>
        The unwavering efforts from the early classes and Coach Allan Belovarac
        are still sensed to today - &quot;The greater the difficulty, the more
        glory in surmounting it.&quot; This message has not been lost in
        translation for the current classes today. Every single trophy signifies
        a moment program history, a new standard to uphold those to come. We
        will never forget your blood, sweat, and tears - because you are a part
        of program history.
      </p>
      <p>
        For the rest of your life, you will always be able to say you were a
        member of an extraordinary team whose whole was greater than the sum of
        its parts, and it was one of the greatest experiences of your life.
        Whether it is reminiscing on the good ole days, long sits in the
        cafeteria,or the bone-chilling walk to practice in the morning, we
        didn&apos;t know we were making memories until we parted our ways.
      </p>
      <p>
        If you want to be a part of the Friends Of Mercyhurst Rowing community,
        to maintain or reconnect with boatmates and expand your network, please
        follow us on social media and reach out! We would love to and want to
        hear from you.
      </p>
      <div className="social-media-links">
        <strong>
          <a>Instagram</a>
        </strong>

        <strong>
          <a>Facebook</a>
        </strong>

        <strong>
          <a>LinkedIn</a>
        </strong>
      </div>
      <div className="link--wrapper">
        <p>
          For more information on how you can be apart of this community, email{' '}
          <em>
            <a href="mailto:info@friendsofmercyhurstrowing.com">
              info@friendsofmercyhurstrowing.com
            </a>
          </em>
        </p>
        <p>
          If you want to share your story or be a featured post for our social
          media, please email{' '}
          <em>
            <a href="mailto:digital@friendsofmercyhurstrowing.com">
              digital@friendsofmercyhurstrowing.com
            </a>
          </em>
        </p>
        <p>
          &apos;Life can only be understood backwards; but it must be lived
          forwards&apos;
          <br />
          -Søren Kierkegaard
        </p>
      </div>
    </div>
  </section>
);

const Connect = (): JSX.Element => {
  return (
    <div className="connect__container">
      {/* <DonationForm /> */}
      <TextSection />
    </div>
  );
};

export default Connect;
