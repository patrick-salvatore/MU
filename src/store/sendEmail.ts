import React from 'react';
import { sendEmailApi } from '@api/send_email';
import { useGlobalContext } from '@providers/global';

export const useSendEmail = () => {
  const { setGlobalNotification } = useGlobalContext();
  const [loading, setLoading] = React.useState(false);

  const sendEmail = async (payload, onSuccess: () => void) => {
    setLoading(true);
    try {
      const res = await sendEmailApi(payload);
      if (res) {
        setGlobalNotification!({
          messages: [{ message: res.message, type: 'success' }],
        });
      }
    } catch (e) {
      setLoading(false);
      setGlobalNotification!({
        messages: [
          {
            message:
              'Oops, something went wrong! Please contact us directly at info@friendsofmercyhurstrowing.com',
            type: 'error',
          },
        ],
      });
    } finally {
      setLoading(false);
      onSuccess();
    }
  };

  return { loading, sendEmail };
};
