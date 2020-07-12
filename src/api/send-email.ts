import axios from 'axios';
import { sendEmailPath } from './constants';

export type SendEmailPayload = {
  message: string;
  senderEmail: string;
  senderName: string;
  emailSubject: string;
};

export const sendEmailApi = (payload: SendEmailPayload) => {
  return axios.post(sendEmailPath, payload, {}).then(res => res.data);
  // axios
  //   .post('http://localhost:8888/api/send-email', payload, {})
  //   .then(res => res.data);
};
