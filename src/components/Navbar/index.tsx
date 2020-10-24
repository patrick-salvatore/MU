import './nav.scss';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';

import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

import './nav.scss';
import { useGlobalContext } from '@providers/global';

const Navbar: React.FC<RouteComponentProps> = ({
  location,
}: {
  location: RouteComponentProps['location'];
}): JSX.Element => {
  const {
    uiSettings: { isMobile },
  } = useGlobalContext();

  return isMobile ? (
    <MobileNav location={location} />
  ) : (
    <DesktopNav location={location} />
  );
};

export default withRouter(Navbar);
