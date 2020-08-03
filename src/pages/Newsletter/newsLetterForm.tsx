import React from 'react';

import { FormSection } from '@components/FormSection';
import { FormInput } from '@components/Inputs/FormInput';
import Form from '@components/form/_form';
import { LoadingButton } from '@components/LoadingButton';
import { DropDown } from '@components/Inputs/DropDown';

import './newsLetterForm.scss';

const NewsletterFormState = {
  emailAddress: '',
  firstName: '',
  lastName: '',
  address: '',
  phoneNumber: '',
  teamAffiliation: '',
  classYear: '',
  teamMember: '',
};

const teamAffiliationOption = [
  'Alumnus/Almuna',
  'Parent',
  'Current Team Memeber',
  'Spouse of Alumnus/Almuna',
  'Family',
  'Friend of Team Memeber',
  'Friend of Alumnus/Almuna',
  'Outside Donor',
  'Other',
];

const getClassYears = (): string[] => {
  const currYear = new Date().getFullYear() + 7;
  const years: string[] = [];

  for (let i = currYear; i > 1975; i--) {
    years.push(`${i}`);
  }

  return years;
};

const NewsLetterForm = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Form
      registry={['teamAffiliation']}
      formFields={NewsletterFormState}
      render={({ register, handleSubmit, errors, setValue }): JSX.Element => (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <FormSection title="Email Address" name="email">
            <FormInput
              register={register}
              name="emailAddress"
              error={errors.emailAddress}
            />
          </FormSection>
          <FormSection title="You Name" name="name">
            <FormInput
              register={register}
              name="firstName"
              error={errors.firstName}
              sublabel="First Name"
            />
            <FormInput
              register={register}
              name="lastName"
              error={errors.lastName}
              sublabel="Last Name"
            />
          </FormSection>
          <FormSection title="Address" name="address">
            <FormInput register={register} name="address" />
          </FormSection>
          <FormSection title="Phone Number" name="phone-number">
            <FormInput register={register} name="phoneNumber" />
          </FormSection>
          <FormSection title="Team Affiliation" name="team-affiliation">
            <DropDown
              required
              register={register}
              setValue={setValue}
              errorMessage="Please tell us your affiliation to MU rowing"
              options={teamAffiliationOption}
              name="teamAffiliation"
            />
          </FormSection>
          <FormSection title="Class Year" name="class-year">
            <DropDown
              required
              register={register}
              setValue={setValue}
              options={getClassYears()}
              name="classYear"
            />
          </FormSection>
          <FormSection
            title="If family/friend, name of rower/coxswain on team."
            name="team-member"
          >
            <FormInput register={register} name="teamMember" />
          </FormSection>
          <LoadingButton
            isLoading={false}
            type="submit"
            className="contact-form--button"
            text="SUBMIT"
          />
        </form>
      )}
    />
  );
};

export default NewsLetterForm;
