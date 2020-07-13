import React from 'react';
import CloseIcon from '@components/close-icon';
import { useGlobalContext } from '@providers/global';
import './styles.scss';

import AlertIcon from '@components/form/alert.svg';
import SuccessIcon from './check-mark.svg';

const Message = ({ message, type, closeNotification }) => {
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
      {icon && React.createElement(icon)}
      <p className="notification__name">{message}</p>
      <span className="notification__close-icon">
        <CloseIcon onClick={closeNotification} />
      </span>
    </div>
  );
};

const Notification = () => {
  const { notifications, setGlobalNotification } = useGlobalContext();

  const closeNotifications = () => {
    setGlobalNotification && setGlobalNotification({ messages: [] });
  };

  return (
    <>
      {notifications.messages.length > 0 ? (
        <div className="notfications__wrapper slide-up">
          {notifications.messages.map(({ message, type }, i) => (
            <Message
              message={message}
              type={type}
              key={`${type}-${i}`}
              closeNotification={closeNotifications}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Notification;
