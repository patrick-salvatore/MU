import React from 'react';
import { useAccordionContext } from './AccordionContext';
import ChevronRight from '@svg/chevron-right.svg';
import ChevronDown from '@svg/chevron-down.svg';

import './summary.scss';

const SummaryIcon = ({ active }) => (
  <div className="icon__wrapper">
    {active ? <ChevronDown /> : <ChevronRight />}
  </div>
);

const Summary = ({ children }) => {
  const { handleChange, expanded } = useAccordionContext();

  return (
    <div onClick={handleChange} className="summary__wrapper">
      <SummaryIcon active={expanded} />
      {children}
    </div>
  );
};

export default Summary;
