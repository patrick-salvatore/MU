import React from 'react';
import { AccordionContext } from './AccordionContext';

import './accordion.scss';

const TransitionComponent = ({ expanded, children }) => (
  <div className={`accordion ${expanded ? 'open' : ''}`}>{children}</div>
);

const Accordion: React.FC = ({ children }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded, setExpanded]);

  const contextValue = React.useMemo(() => ({ expanded, handleChange }), [
    expanded,
    handleChange,
  ]);

  const [Summary, ...rest] = React.Children.toArray(children);
  return (
    <div className="accordion__wrapper">
      <AccordionContext.Provider value={contextValue}>
        {Summary}
      </AccordionContext.Provider>
      <TransitionComponent expanded={expanded}>{rest}</TransitionComponent>
    </div>
  );
};

export default Accordion;
