import axios from 'axios';
import { sendEmailPath } from './constants';

export type SendEmailPayload = {
  message: string;
  senderEmail: string;
  senderName: string;
  emailSubject: string;
};

export const sendEmailApi = (payload: SendEmailPayload) =>
  axios.post(sendEmailPath, payload, {}).then(res => res.data);
