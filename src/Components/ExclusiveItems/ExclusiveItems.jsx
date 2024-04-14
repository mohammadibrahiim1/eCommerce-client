/* eslint-disable no-unused-vars */
import React from "react";

const items = [
  {
    id: 1,
    name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    img: "https://i.ibb.co/S3XmX5X/video-calling-camera.png",
    price: 1500,
  },
  {
    id: 2,
    name: "Simple Mobile 4G LTE Prepaid Smartphone",
    img: "https://i.ibb.co/7xcPJqC/new-Samrtphone.png",
    price: 1120,
  },
  {
    id: 3,
    name: "4K UHD LED Smart TV with Chromecast Built-in",
    img: "https://i.ibb.co/sgnDHtY/smarttv.png",
    price: 230,
  },
  {
    id: 4,
    name: "Samsung Electronics Samsung Galexy S21 5G",
    img: "https://i.ibb.co/v1Xbn7P/smartphone.png",
    price: 830,
  },
  {
    id: 5,
    name: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
    img: "https://i.ibb.co/sgnDHtY/smarttv.png",
    price: 990,
  },
  {
    id: 6,
    name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    img: "https://i.ibb.co/S3XmX5X/video-calling-camera.png",
    price: 590,
  },
  {
    id: 7,
    name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    img: "https://i.ibb.co/6nX55D9/soundbox.png",
    price: 770,
  },
  {
    id: 8,
    name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    img: "https://i.ibb.co/vQwN11V/cctv.png",
    price: 770,
  },
  {
    id: 9,
    name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    img: "https://i.ibb.co/zHYWFtX/drone.png",
    price: 870,
  },
  {
    id: 10,
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
    img: "https://i.ibb.co/NShGrG7/keyboard.png",
    price: 670,
  },
  {
    id: 11,
    name: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...",
    img: "https://i.ibb.co/qWz9M7L/printer.png",
    price: 420,
  },
  {
    id: 12,
    name: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
    img: "https://i.ibb.co/gFnZ3mW/sony-phone.pngz",
    price: 330,
  },
];

const ExclusiveItems = () => {
  return (
    <div>
      <section className="max-w-screen-2xl mx-auto">
        <div>
          <h1 className="font-semibold text-[24px] text-[#00A2C9] mt-[72px] mb-[24px]">
            FLASH SALE TODAY
          </h1>
        </div>

        <div className="grid grid-cols-5 justify-center items-center  gap-5">
          {items?.map((item) => (
            <div key={item?.id}>
              <div className="flex max-w-[312px] h-[94px] bg-white shadow-lg rounded-lg overflow-hidden gap-5">
                <div
                  className="w-[80px] h-[80px]  bg-cover "
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                ></div>
                <div className="w-2/3">
                  <h1 className="text-gray-900 font-bold text-xs">
                    {item?.name}
                  </h1>
                  <p className=" py-1 text-sm font-semibold text-[#2DA5F3]">
                    ${item?.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExclusiveItems;
