import React from 'react';
import { newsletterSignupApi } from '@api/news_letter';
import { useGlobalContext } from '@providers/global';

export const useNewsLetterSignup = () => {
  const { setGlobalNotification } = useGlobalContext();
  const [loading, setLoading] = React.useState(false);

  const newsletterSignup = async (payload, onSuccess: () => void) => {
    setLoading(true);
    try {
      const res = await newsletterSignupApi(payload);
      if (res) {
        setGlobalNotification!({
          messages: [{ message: 'Thank you for signing up!', type: 'success' }],
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

  return { loading, newsletterSignup };
};
