import React from 'react';

interface ISubMenu {
  children: React.ReactNode | boolean;
  className: string;
  activeClassName: string;
  isOpenSubMenu: boolean;
  onMouseLeave: () => void;
}

export const SubMenu: React.FC<ISubMenu> = ({
  children,
  className,
  activeClassName,
  isOpenSubMenu,
  onMouseLeave,
}): JSX.Element => {
  return (
    <div
      onMouseLeave={onMouseLeave}
      className={isOpenSubMenu ? `${className} ${activeClassName}` : className}
    >
      {children}
    </div>
  );
};
