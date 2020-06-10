import React from 'react';

const LazyBackground = (props): JSX.Element => {
  const [src, setSrc] = React.useState<string | null>(null);
  // const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    const { src } = props;

    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = (): void => {
      setSrc(src);
      // setLoaded(true);
    };
  }, []);

  const styles = {
    ...props.styles,
    backgroundImage: `url(${src || props.placeholder}) cover no-repeat center`,
    backgroundSize: 'cover',
  };

  return <div {...props} style={styles} />;
};

export default LazyBackground;
