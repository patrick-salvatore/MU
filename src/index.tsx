import '@babel/polyfill';
import 'core-js/es/set';
import 'core-js/stable';
import React from 'react';
import { render } from 'react-dom';
import { AppView } from './routes/index';

import './index.scss';

const appRoot = document.getElementById('FOMR--root');

document.addEventListener('DOMContentLoaded', function() {
  render(<AppView />, appRoot);
});
