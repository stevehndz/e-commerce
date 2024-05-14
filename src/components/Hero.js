
"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "Women's Latest Fashion Sale",
      price: "$520",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Accesories",
      mainTitle: "Modern Sunglasses",
      price: "$400",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Sale Offer",
      mainTitle: "New Fashion Summer Sale",
      price: "$530",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => {
            return (
              <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
