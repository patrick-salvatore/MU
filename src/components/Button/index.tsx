import React from 'react';

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  padding?: string | number;
  minWidth?: string | number;
  letterSpacing?: string | number;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  size?:
    | 'small'
    | 'smallMD'
    | 'smallLG'
    | 'medium'
    | 'mediumLG'
    | 'mediumXL'
    | 'mediumXLNarrow'
    | 'large';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  ...buttonProps
}) => {
  return (
    <button className={className} onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
};
