import React from 'react';
import { useForm } from 'react-hook-form';

import { FormSection } from '@components/FormSection';
import { FormInput } from '@components/Inputs/FormInput';
import { registerRequiredWithMessage } from '@components/form/_form';
import { LoadingButton } from '@components/LoadingButton';
import { DropDown } from '@components/Inputs/DropDown';
import ErrorMessage from '@components/FormErrorMessage';

import {
  TeamAffiliationError,
  teamAffiliationOption,
  getClassYears,
  STATES,
} from './constants';
import './newsLetterForm.scss';

type NewletterFields = {
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

const NewsLetterForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    setError,
    clearError,
  } = useForm<NewletterFields>();

  const onSubmit = handleSubmit(values => {
    if (!values.teamAffiliation) {
      setError('teamAffiliation', TeamAffiliationError);
    }
    clearError();
    console.log(values);
  });

  return (
    <form onSubmit={onSubmit} className="news-letter--form">
      <FormSection title="Email Address" name="email" required>
        <FormInput
          register={registerRequiredWithMessage(
            register,
            'Please enter your email'
          )}
          name="emailAddress"
          error={errors.emailAddress}
        />
      </FormSection>
      <FormSection title="Your Name" name="name" required>
        <FormInput
          register={registerRequiredWithMessage(
            register,
            'Please enter your first name'
          )}
          name="firstName"
          error={errors.firstName}
          sublabel="First Name"
        />
        <FormInput
          register={registerRequiredWithMessage(
            register,
            'Please enter your last name'
          )}
          name="lastName"
          error={errors.lastName}
          sublabel="Last Name"
        />
      </FormSection>
      <FormSection title="Address" name="address">
        <FormInput register={register} name="address" />
      </FormSection>
      <div
        className="city_state__container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'flex',
        }}
      >
        <FormSection title="City" name="city">
          <FormInput register={register} name="city" />
        </FormSection>
        <FormSection title="State" name="state">
          <DropDown
            required
            register={register}
            setValue={setValue}
            options={STATES}
            name="state"
          />
        </FormSection>
      </div>
      <FormSection title="Phone Number" name="phone-number">
        <FormInput register={register} name="phoneNumber" />
      </FormSection>
      <FormSection title="Team Affiliation" name="team_affiliation" required>
        <DropDown
          required
          register={register}
          setValue={setValue}
          options={teamAffiliationOption}
          name="teamAffiliation"
        />
        {errors?.teamAffiliation?.types?.message && (
          <ErrorMessage
            error={errors.teamAffiliation.types.message as string}
          />
        )}
      </FormSection>
      <FormSection title="Class Year" name="class-year" required>
        <DropDown
          required
          register={register}
          setValue={setValue}
          options={getClassYears()}
          name="classYear"
        />
      </FormSection>
      <FormSection
        title="Know a team member? Let us know who."
        name="team-member"
      >
        <FormInput register={register} name="teamMemberName" />
      </FormSection>
      <LoadingButton
        isLoading={false}
        type="submit"
        className="news-letter--button"
        text="SUBMIT"
      />
    </form>
  );
};

export default NewsLetterForm;
