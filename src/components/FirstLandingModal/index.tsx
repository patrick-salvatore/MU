import React from 'react';
import Modal from '@components/modal';
import { Link } from 'react-router-dom';

import OARS from '@img/modal-oars.png';
import './styles.scss';

const SubcribeBox = () => (
  <div className="email-signup--wrapper">
    <h2 className="email-signup--header1">Subscribe to our email list!</h2>
    <p className="email-signup--header2">
      Stay up to date with monthly newsletters and alerts. Enter your email to
      subscribe!
    </p>
    <Link to="/newsletter" className="subscribe-button">
      SUBSCRIBE!
    </Link>
  </div>
);

const DonateBox = () => (
  <div className="donate--wrapper">
    <h2>
      Interested in making a donation to support Mercyhurst University Rowing?
    </h2>
    <Link to="/donate" className="donation-button">
      YES!
    </Link>
  </div>
);

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
