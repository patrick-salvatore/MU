import axios from 'axios';
import { sendEmailPath } from './constants';

export type SendEmailPayload = {
  message: string;
  emailAddress: string;
  senderName: string;
  emailSubject: string;
};

export const sendEmailApi = async (payload: SendEmailPayload) =>
  axios
    .post<Promise<{ message: string }>>(sendEmailPath, payload, {})
    .then(res => res.data);
