import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './board-page.scss';
import { MEMBERS } from './members';

// import board from '@img/board.png';

const BoardPage: React.FC = (): JSX.Element => {
  return (
    <div className="board__wrapper">
      <div className="board__header">
        <h1 className="board__header--title">BOARD OF DIRECTORS</h1>
        <a href="/static/FoMR-Articles_of_Incorporation.pdf">PDF</a>
        <p className="board__header--sub-title">
          Our Board of Directors is comprised of our President, Vice President,
          Treasurer, Secretary, Alumni Relations Secretary, and four Board
          Members who meet monthly to discuss and vote on events affecting the
          Mercyhurst University&apos;s Rowing Team.
        </p>
      </div>
      <div className="board__members">
        {MEMBERS.map((m, mIdx) => (
          <div key={m.name} className="board__members--member">
            <div className="member-image__container">
              <div className="member-image__wrapper">
                {mIdx > 2 ? (
                  <LazyLoadImage
                    src={m.memberImg}
                    alt={m.name}
                    className="member-image"
                  />
                ) : (
                  <img
                    src={m.memberImg}
                    alt={m.name}
                    className="member-image"
                  />
                )}
                <p className="member-name">
                  {m.name}, &apos;{m.gradYear}
                </p>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-title">{m.title}</h3>
              {Object.values(m.bio).map((p, pIdx) => (
                <p className="member-bio" key={`${m.name}-bio-${pIdx}`}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* <div className="donation-button__wrapper"> */}
        <Link to="/donate" className="donation-button">
          donate
        </Link>
      </div>
    </div>
  );
};

export default React.memo(BoardPage);
