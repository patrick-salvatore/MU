export const teamAffiliationOption = [
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

export const getClassYears = (): string[] => {
  const currYear = new Date().getFullYear() + 7;
  const years: string[] = [];

  for (let i = currYear; i > 1970; i--) {
    years.push(`${i}`);
  }

  return years;
};

export const TeamAffiliationError = {
  type: 'manual',
  message: 'Please tell us your affiliation to MU rowing',
};

export const STATES = [
  'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];
