import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import BoardPage from '@pages/BoardPage';
import ContactPage from '@pages/ContactPage';
import LandingPage from '@pages/LandingPage';
import Donate from '@pages/Donate';
import Connect from '@pages/Connect';
// import NotFound from '@pages/NotFound';
import Newsletter from '@pages/Newsletter';

import ScrollToTop from '@components/scroll-to-top';
import Navbar from '@components/Navbar';
import { Footer } from '@components/Footer';
import ROUTES from './constants';

export const AppView: React.FC = (): JSX.Element => (
  <>
    <BrowserRouter>
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route exact={true} path={ROUTES.CONTACT} component={ContactPage} />
          <Route exact={true} path={ROUTES.BOARD} component={BoardPage} />
          <Route exact={true} path={ROUTES.NEWSLETTER} component={Newsletter} />
          <Route exact={true} path={ROUTES.CONNECT} component={Connect} />
          <Route exact={true} path={ROUTES.DONATE} component={Donate} />
          <Route path={ROUTES.LANDING} component={LandingPage} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
    <Footer />
  </>
);
