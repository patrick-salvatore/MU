import * as React from 'react';

type AccordionContext = {
  expanded?: boolean;
  handleChange?: () => void;
};

export const AccordionContext = React.createContext<AccordionContext>({});

export const useAccordionContext = () => React.useContext(AccordionContext);
