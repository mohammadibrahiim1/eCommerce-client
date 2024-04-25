/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const SimpleSlider = () => {
  const settings = {
    focusOnSelect: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container w-[60%]">
      <Slider {...settings}>
        <div>
          <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div>
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div>
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div>
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div>
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            alt=""
            srcSet=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
