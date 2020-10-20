import './nav.scss';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';

import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

import './nav.scss';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Navbar: React.FC<RouteComponentProps> = ({
  location,
}: {
  location: RouteComponentProps['location'];
}): JSX.Element => {
  const { width } = useWindowDimensions();

  return width > 425 ? (
    <DesktopNav location={location} />
  ) : (
    <MobileNav location={location} />
  );
};

export default withRouter(Navbar);
