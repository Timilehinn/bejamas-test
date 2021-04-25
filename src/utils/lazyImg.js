import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useMediaQuery } from 'react-responsive'


const LazyImage = (image) => {

    const isMobileScreen = useMediaQuery({
        query: '(min-width: 0px) and (max-width: 767px)'
    })
    return(
  <div>
    <LazyLoadImage
      alt=""
      height={isMobileScreen ? '400px' : '200px'}
      src={image.src} // use normal <img> attributes as props
      width='100%' />
  </div>
    )
}
export default LazyImage