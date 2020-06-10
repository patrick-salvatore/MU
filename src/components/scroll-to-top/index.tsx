import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop(props): JSX.Element {
  useEffect(() => {
    const unlisten = props.history.listen(() => {
      window.scrollTo(0, 0);
    });

    return (): void => {
      unlisten();
    };
  }, []);

  return props.children;
}

export default withRouter(ScrollToTop);
