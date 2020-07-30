import React from 'react';
import { Button, ButtonProps } from '@components/Button';
import Loader from '@components/loader';

type LoadButtonProps = ButtonProps & {
  isLoading: boolean;
  text: string;
  width?: number;
  height?: number;
};

export const LoadingButton = ({
  isLoading,
  onClick,
  text,
  ...props
}: LoadButtonProps) => {
  return (
    <Button
      onClick={isLoading ? undefined : onClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div>
          <Loader width={20} height="100%" color="white" />
        </div>
      ) : (
        text
      )}
    </Button>
  );
};
