import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import instagram1 from '@img/instagram/instagram1.png';
import instagram2 from '@img/instagram/instagram2.png';
import instagram3 from '@img/instagram/instagram3.png';
import instagram4 from '@img/instagram/instagram4.png';
import instagram5 from '@img/instagram/instagram5.png';
import instagram6 from '@img/instagram/instagram6.png';

import './instagramFeed.scss';

export const InstagramFeed: React.FC = (): JSX.Element => {
  const imgSrc = [
    { img: instagram1, url: 'https://www.instagram.com/p/Bqvfh_zFmKm/' },
    { img: instagram2, url: 'https://www.instagram.com/p/B3A39CYFP5_/' },
    { img: instagram3, url: 'https://www.instagram.com/p/BjXbt6_l0xd/' },
    { img: instagram4, url: 'https://www.instagram.com/p/B3hz6W-FbNm/' },
    { img: instagram5, url: 'https://www.instagram.com/p/BmhH7ADlb-8/' },
    { img: instagram6, url: 'https://www.instagram.com/p/BUme_I2ge0A/' },
  ];

  const openInstagramImg = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { url } = (e.target as HTMLDivElement).dataset;

    window.open(
      url,
      '_blank'
      // 'menubar=yes,resizable=yes,scrollbars=yes,status=yes,width=750,height=750'
    );
  };

  return (
    <>
      <div className="instagram--header">
        <h1 className="header--name">@mercyhurst_lightmen</h1>
      </div>
      <div className="instagram__wrapper">
        {imgSrc.map(({ img, url }, i) => (
          <LazyLoadImage
            key={i}
            data-url={url}
            onClick={openInstagramImg}
            src={img}
            alt={`instragram-${i + 1}`}
            srcSet=""
            className="instagram-img"
          />
        ))}
      </div>
    </>
  );
};
