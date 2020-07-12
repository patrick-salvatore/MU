import axios from 'axios';
import { sendEmailPath } from './constants';

export type SendEmailPayload = {
  message: string;
  senderEmail: string;
  senderName: string;
  emailSubject: string;
};

export const sendEmailApi = async (payload: SendEmailPayload) => {
  const res = await axios.post(sendEmailPath, payload, {});
  return res.data;
};
