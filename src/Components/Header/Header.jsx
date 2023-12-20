import { Carousel } from "keep-react";
import "./Header.css";

const Header = () => {
  // https://i.ibb.co/mJxjqTj/smart-bazar-carousel-1.jpg
  // https://i.ibb.co/WvLcy0b/smart-bazar-carousel-2.jpg
  // https://i.ibb.co/F70TZ7d/pexels-pixabay-39579.jpg
  // https://i.ibb.co/sCBtPKY/smart-bazar-carousel-3.jpg
  // https://i.ibb.co/ZH2WpDf/smart-bazar-carousel-5.jpg
  // https://i.ibb.co/2Z6DXP2/smart-bazar-carousel-4.jpg

  return (
    <div>
      <div className=" container flex  justify-center items-center mx-auto">
        <div>
          <img
            className="header_side_img rounded-md"
            src="https://i.ibb.co/WvLcy0b/smart-bazar-carousel-2.jpg"
            alt=""
          />
        </div>

        <Carousel
          indicatorsType="ring"
          indicators={true}
          className="w-[920px] mx-auto my-5"
        >
          <img
            src="https://i.ibb.co/mJxjqTj/smart-bazar-carousel-1.jpg"
            alt="slider-1"
          />
          <img
            src="https://i.ibb.co/sCBtPKY/smart-bazar-carousel-3.jpg"
            alt="slider-2"
          />
          <img
            src="https://i.ibb.co/ZH2WpDf/smart-bazar-carousel-5.jpg"
            alt="slider-3"
          />
          <img
            src="https://i.ibb.co/2Z6DXP2/smart-bazar-carousel-4.jpg"
            alt="slider-4"
          />
        </Carousel>

        <div>
          <img
            className="header_side_img rounded-md"
            src="https://i.ibb.co/F70TZ7d/pexels-pixabay-39579.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
