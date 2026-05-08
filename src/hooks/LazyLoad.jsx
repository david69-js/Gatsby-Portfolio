import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = ({ image, className, style }) => (
    <LazyLoadImage
      alt='Image'
      src={image}
      delayMethod={`throttle`}
    visibleByDefault={false}
    className={className}
    style={style}
       />
);

export default MyImage;