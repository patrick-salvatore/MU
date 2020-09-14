import './nav.scss';
import React from 'react';
import { NavLink, Link, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import LogoSVG from './svg/logo2.svg';

const Navbar: React.FC<RouteComponentProps> = ({ location }): JSX.Element => {
  const [sticky, setSticky] = React.useState<boolean>(false);
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

      if (navRef.current) {
        const isSticky = Math.abs(scrollTop) >= 50;
        if (isSticky) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };

    handleScroll();
    document.addEventListener('scroll', handleScroll, false);

    return (): void => {
      document.removeEventListener('scroll', () => handleScroll);
    };
  }, [navRef]);

  return (
    <div
      ref={navRef}
      className={sticky ? 'nav__wrapper sticky' : 'nav__wrapper'}
    >
      <div className="logo__wrapper">
        <div className="logo">
          <Link to="/">
            <LogoSVG />
          </Link>
          <span className="title">
            FRIENDS OF <br />
            MERCYHURST ROWING
          </span>
        </div>
      </div>
      <div
        className="nav-contents__wrapper"
        style={{
          textShadow:
            location.pathname === '/' ? '2px 2px 3px rgba(0, 0, 3, 1)' : '',
        }}
      >
        <NavLink
          className="link"
          activeClassName="link__active"
          to="/"
          exact={true}
        >
          <span className="link__text">HOME</span>
        </NavLink>
        <NavLink className="link" activeClassName="link__active" to="/donate">
          <span className="link__text">DONATE</span>
        </NavLink>
        <NavLink className="link" activeClassName="link__active" to="/board">
          <span className="link__text">OUR BOARD</span>
        </NavLink>
        {/* <NavLink className="link" activeClassName="link__active" to="/team">
          <span className="link__text">THE TEAM</span>
        </NavLink> */}
        <NavLink
          className="link"
          activeClassName="link__active"
          to="/newsletter"
        >
          <span className="link__text">NEWSLETTER</span>
        </NavLink>
        <NavLink className="link" activeClassName="link__active" to="/contact">
          <span className="link__text">CONTACT</span>
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
