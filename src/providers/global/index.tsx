import React from 'react';
import {
  IGlobalDataContext,
  IGlobalDataContextMemo,
  GlobalNotificationStateType,
} from './types';

const initialGlobalState = {
  notifications: { messages: [{ message: null, type: null }], display: false },
};

const GlobalContext = React.createContext<IGlobalDataContext>(
  initialGlobalState
);

const GlobalProvider: React.FC = (props): JSX.Element => {
  const [globalState, setGlobalState] = React.useState<IGlobalDataContext>(
    initialGlobalState
  );

  React.useEffect(() => {
    return () => setGlobalState(initialGlobalState);
  }, []);

  const setGlobalNotification = React.useCallback(
    (notificationProps: GlobalNotificationStateType) => {
      setGlobalState({
        ...globalState,
        notifications: { ...notificationProps },
      });
    },
    []
  );

  const memoObject = {
    ...globalState,
    setGlobalNotification,
  };

  const memoizedState = React.useMemo<IGlobalDataContextMemo>(
    () => memoObject,
    [globalState, setGlobalNotification]
  );

  return (
    <GlobalContext.Provider value={memoizedState}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): IGlobalDataContext =>
  React.useContext(GlobalContext);

export default GlobalProvider;
