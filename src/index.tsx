import React from 'react';
import { render } from 'react-dom';
import { AppView } from './routes/index';
import GlobalProvider, { useGlobalContext } from './providers/global';
import Notification from './components/notifications/index';

import './index.scss';

const appRoot = document.getElementById('FOMR--root');

const App = () => {
  const { setIsMobile } = useGlobalContext();

  React.useEffect(() => {
    const handleResize = () => {
      const { innerWidth: width } = window;
      setIsMobile!(width < 428);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <AppView />
      <Notification />
    </>
  );
};

render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  appRoot
);
