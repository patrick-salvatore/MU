import axios from 'axios';
import { sendEmailPath } from './constants';

export type SendEmailPayload = {
  message: string;
  senderEmail: string;
  senderName: string;
  emailSubject: string;
};

export const sendEmailApi = async (payload: SendEmailPayload) => {
  const res = await axios.post(
    'http://localhost:8888/api/send-email',
    payload,
    {}
  );
  return res;
};
