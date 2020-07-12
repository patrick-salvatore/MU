import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import AboutPage from '@pages/AboutPage';
import ContactPage from '@pages/ContactPage';
import LandingPage from '@pages/LandingPage';
import Donate from '@pages/Donate';
import NotFound from '@pages/NotFound';
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
          <Route exact={true} path={ROUTES.LANDING} component={LandingPage} />
          <Route exact={true} path={ROUTES.CONTACT} component={ContactPage} />
          <Route exact={true} path={ROUTES.ABOUT} component={AboutPage} />
          <Route exact={true} path={ROUTES.DONATE} component={Donate} />
          <Route exact={true} path={ROUTES.NEWSLETTER} component={Newsletter} />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
    <Footer />
  </>
);
