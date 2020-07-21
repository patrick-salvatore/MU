import React from 'react';
import { AccordionContext } from './AccordionContext';

import './accordion.scss';

const TransitionComponent = ({ expanded, children }) => (
  <div className={`accordion ${expanded ? 'open' : ''}`}>{children}</div>
);

const Accordion: React.FC = ({ children: childrenProps }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded, setExpanded]);

  const contextValue = React.useMemo(() => ({ expanded, handleChange }), [
    expanded,
    handleChange,
  ]);

  const [summary, ...children] = React.Children.toArray(childrenProps);
  return (
    <div className="accordion__wrapper">
      <AccordionContext.Provider value={contextValue}>
        {summary}
      </AccordionContext.Provider>
      <TransitionComponent expanded={expanded}>{children}</TransitionComponent>
    </div>
  );
};

export default Accordion;
