import React from 'react';

type IAnchorTag = {
  children: React.ReactChild;
  className?: string;
  href: string;
  newTab: boolean;
  style?: Record<any, any>;
};

export const AnchorTag: React.FC<IAnchorTag> = ({
  children,
  className,
  href,
  newTab,
  style,
  ...rest
}): JSX.Element => {
  return (
    <a
      {...rest}
      className={className}
      href={href}
      target={newTab ? '_blank' : ''}
      rel={newTab ? 'noopener noreferrer' : ''}
      style={style}
    >
      {children}
    </a>
  );
};
