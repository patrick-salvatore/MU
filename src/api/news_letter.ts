import axios from 'axios';
import { newsletterPath } from './constants';

export type NewletterFields = {
  emailAddress: string;
  firstName: string;
  lastName: string;
  teamAffiliation: string;
  streetAddress: string;
  city: string;
  state: string;
  classYear: string;
  teamMemberName: string | null;
};

export const newsletterSignupApi = async (payload: NewletterFields) =>
  axios.post(newsletterPath, payload, {}).then(res => res.data);
