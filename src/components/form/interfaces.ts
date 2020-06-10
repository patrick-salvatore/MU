export interface FormFields {
  amount?: number;
  paymentInfo?: {
    firstName?: string;
    lastName?: string;
    company?: string;
    address?: string;
    city?: string;
    country?: string;
    state?: string;
    zip?: string;
    phone?: string;
    email?: string;
    comment?: string;
  };
  firstName?: string;
  lastName?: string;
  company?: string;
  address?: string;
  city?: string;
  country?: string;
  state?: string;
  zip?: string;
  phone?: string;
  email?: string;
  comment?: string;
}

export interface FormProps {
  formFields: FormFields;
  render: Function;
  className?: string;
  customHandleSubmit?: (formFields: FormFields) => void;
}
