import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '../Card/Card';
import './style.css'

const Slider = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 40
    }
  };

  const colors = [1,2,3];
  return (

    <Carousel
    //deviceType={deviceType}
    itemClass="image-item"
    responsive={responsive}
    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
    showDots={true}
    className="wrapper"
   >
    {
      colors.map((color,index) => (
        <Card/>
      ))
    }
       
   </Carousel>
  )
}

export default Slider