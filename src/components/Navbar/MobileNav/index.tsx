import React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import LogoSVG from '@svg/_logo2.svg';
import ChevronLeft from '@svg/chevron-left.svg';
import ChevronRight from '@svg/chevron-right.svg';

export const MobileNav = ({
  location,
}: {
  location: RouteComponentProps['location'];
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSideNav = (bool: boolean): void => setIsOpen(bool);

  React.useEffect(() => {
    toggleSideNav(false);
  }, [location.pathname]);

  const SideNavToggle = (): JSX.Element => (
    <div data-testid="clickElm" className="mob-nav-icon">
      <div className="sidebar-btn__wrapper">
        {isOpen ? (
          <ChevronLeft onClick={() => toggleSideNav(false)} className="icon" />
        ) : (
          <ChevronRight onClick={() => toggleSideNav(true)} className="icon" />
        )}
      </div>
    </div>
  );

  return (
    <>
      <SideNavToggle />
      <nav
        className={`nav__wrapper--mob ${isOpen ? 'slide-right' : 'slide-left'}`}
      >
        <div className="nav-contents__wrapper--mob">
          <div className="nav-items">
            <NavLink
              className="link"
              activeClassName="link__active"
              to="/"
              exact={true}
            >
              <span className="link__text">HOME</span>
            </NavLink>
            {/* <NavLink className="link" activeClassName="link__active" to="/donate">
      <span className="link__text">DONATE</span>
    </NavLink> */}
            <NavLink
              className="link"
              activeClassName="link__active"
              to="/connect"
            >
              <span className="link__text">CONNECT</span>
            </NavLink>
            <NavLink
              className="link"
              activeClassName="link__active"
              to="/board"
            >
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
            <NavLink
              className="link"
              activeClassName="link__active"
              to="/contact"
            >
              <span className="link__text">CONTACT</span>
            </NavLink>
          </div>
          <div className="logo__wrapper">
            <div className="overlay"></div>
            <LogoSVG />
          </div>
        </div>
      </nav>
    </>
  );
};
