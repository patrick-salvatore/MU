import { useState, useEffect } from 'react';

export const useProgressiveImage = (src: string): string => {
  const [sourceLoaded, setSourceLoaded] = useState<string>('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = (): void => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};
