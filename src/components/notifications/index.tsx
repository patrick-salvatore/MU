import React from 'react';
import { useGlobalContext } from '@providers/global';
import './styles.scss';

import AlertIcon from '@components/form/alert.svg';
import SuccessIcon from './check-mark.svg';

const Message = ({ message, type }) => {
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

const Notification = () => {
  const { notifications } = useGlobalContext();

  return (
    <>
      {notifications.messages.length > 0 ? (
        <div className={`notfications__wrapper`}>
          {notifications.messages.map(({ message, type }, i) => (
            <Message message={message} type={type} key={`${type}-${i}`} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Notification;
