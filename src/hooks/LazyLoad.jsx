import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = React.forwardRef(({ image, className, style }, ref) => (
    <LazyLoadImage
      ref={ref}
      alt='Image'
      src={image}
      delayMethod={`throttle`}
    visibleByDefault={false}
    className={className}
    style={style}
       />
));

export default MyImage;