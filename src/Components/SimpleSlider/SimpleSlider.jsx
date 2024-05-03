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
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container w-[60%]">
      <Slider {...settings}>
        <div>
          <img
            src="https://i.ibb.co/kJZZtQm/Face-Book-Post-4.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/GFjDR1k/healthcare-and-hygiene.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/ww1yJNv/beauty-product.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/GFjDR1k/healthcare-and-hygiene.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/ww1yJNv/beauty-product.jpg"
            alt=""
            srcSet=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
