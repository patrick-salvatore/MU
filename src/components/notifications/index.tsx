import React from 'react';
import { useGlobalContext } from '../../providers/global';
import './styles.scss';

import AlertIcon from 'components/form/alert.svg';
import SuccessIcon from './check-mark.svg';

type TypeClass = 'success' | 'error' | 'info';
type MessageType = { message: string; type: TypeClass };
const Message: React.FC<MessageType> = ({ message, type }) => {
  let messageTypeClass;
  let icon;

  switch (type) {
    case 'error':
      icon = AlertIcon;
      messageTypeClass = 'error';
      break;
    case 'success':
      icon = SuccessIcon;
      messageTypeClass = 'success';
      break;
    case 'info':
      messageTypeClass = 'info';
      break;
  }

  return (
    <div className={`notification__wrapper ${messageTypeClass}`}>
      {React.createElement(icon)}
      <p className="notification__name">{message}</p>
    </div>
  );
};

const Notification = props => {
  const { notifications } = useGlobalContext();

  // return <>{notification.display && <>TEST</>}</>;
  return (
    <>
      {notifications.display && (
        <div className={`notfications__wrapper`}>TEST</div>
      )}
    </>
  );
};

export default Notification;
