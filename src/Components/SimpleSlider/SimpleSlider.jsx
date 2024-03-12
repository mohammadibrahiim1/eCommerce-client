/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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
  // const [current, setCurrent] = useState(0);
  // const prev = () => {
  //   setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  // };

  // const next = () => {
  //   setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  // };

  // useEffect(() => {
  //   if (!autoSlide) return;
  //   const slideInterval = setInterval(next, autoSlideInterval);
  //   return () => {
  //     clearInterval(slideInterval);
  //   };
  // }, []);

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
    <div className="slider-container w-[60%] mx-7 ">
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
    // <div
    //   id="carouselExampleIndicators"
    //   className="relative"
    //   data-twe-carousel-init
    //   data-twe-ride="carousel"
    // >
    //   {/* <!--Carousel indicators--> */}
    //   <div
    //     className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    //     data-twe-carousel-indicators
    //   >
    //     <button
    //       type="button"
    //       data-twe-target="#carouselExampleIndicators"
    //       data-twe-slide-to="0"
    //       data-twe-carousel-active
    //       className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-twe-target="#carouselExampleIndicators"
    //       data-twe-slide-to="1"
    //       className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-twe-target="#carouselExampleIndicators"
    //       data-twe-slide-to="2"
    //       className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
    //       aria-label="Slide 3"
    //     ></button>
    //   </div>

    //   {/* <!--Carousel items--> */}
    //   <div
    //     className="flex transition-transform ease-out duration-500"
    //     // style={{ transform: ` translateX(-${current * 100}%)` }}
    //   >
    //     {slides}
    //     {/* <!--First item--> */}
    //     {/* <div
    //       className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //       data-twe-carousel-item
    //       data-twe-carousel-active
    //     >
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
    //         className="block w-full"
    //         alt="Wild Landscape"
    //       />
    //     </div> */}
    //     {/* <!--Second item--> */}
    //     {/* <div
    //       className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //       data-twe-carousel-item
    //     >
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
    //         className="block w-full"
    //         alt="Camera"
    //       />
    //     </div> */}
    //     {/* <!--Third item--> */}
    //     {/* <div
    //       className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //       data-twe-carousel-item
    //     >
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
    //         className="block w-full"
    //         alt="Exotic Fruits"
    //       />
    //     </div> */}
    //   </div>

    //   {/* <!--Carousel controls - prev item--> */}
    //   <button
    //     onClick={prev}
    //     className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    //     type="button"
    //     data-twe-target="#carouselExampleIndicators"
    //     data-twe-slide="prev"
    //   >
    //     <span className="inline-block h-8 w-8">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="1.5"
    //         stroke="currentColor"
    //         className="h-6 w-6"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M15.75 19.5L8.25 12l7.5-7.5"
    //         />
    //       </svg>
    //     </span>
    //     <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
    //       Previous
    //     </span>
    //   </button>
    //   {/* <!--Carousel controls - next item--> */}
    //   <button
    //     onClick={next}
    //     className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    //     type="button"
    //     data-twe-target="#carouselExampleIndicators"
    //     data-twe-slide="next"
    //   >
    //     <span className="inline-block h-8 w-8">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="1.5"
    //         stroke="currentColor"
    //         className="h-6 w-6"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M8.25 4.5l7.5 7.5-7.5 7.5"
    //         />
    //       </svg>
    //     </span>
    //     <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
    //       Next
    //     </span>
    //   </button>
    // </div>
    // <div className="overflow-hidden relative ">
    //   <div
    //     className="flex transition-transform ease-out duration-500"
    //     style={{ transform: ` translateX(-${current * 100}%)` }}
    //   >
    //     {slides}
    //   </div>

    //   <div className="absolute inset-0 flex items-center justify-between p-4">
    //     <button
    //       onClick={prev}
    //       className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
    //     >
    //       <FaChevronLeft size={22} />
    //     </button>
    //     <button
    //       onClick={next}
    //       className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
    //     >
    //       <FaChevronRight size={22} />
    //     </button>
    //   </div>

    //   <div className="absolute bottom-4 right-0 left-0">
    //     <div className="flex items-center justify-center  gap-2">
    //       {slides.map((_, i) => {
    //         <div
    //           className={`  transition-all w-3 h-3 bg-white rounded-full ${
    //             current === i ? "p-2" : " bg-opacity-50"
    //           }   `}
    //         />;
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default SimpleSlider;
