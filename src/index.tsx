import React from 'react';
import { render } from 'react-dom';
import { AppView } from './routes/index';
import GlobalProvider from './providers/global';
import Notification from './components/notifications/index';

import './index.scss';

const appRoot = document.getElementById('FOMR--root');

const APP = (
  <GlobalProvider>
    <AppView />
    <Notification />
  </GlobalProvider>
);

document.addEventListener('DOMContentLoaded', function() {
  render(APP, appRoot);
});
