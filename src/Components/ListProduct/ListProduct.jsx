// eslint-disable-next-line no-unused-vars
import React from "react";
// import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
const ListProduct = ({ product }) => {
  // const dispatch = useDispatch();
  const { model, image, price, _id, status } = product;
  return (
    <div>
      <div>
        <div className="w-[630px] lg:flex ">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage:
                "url('https://tailwindcss.com/img/card-left.jpg')",
            }}
            title="Woman holding a mug"
          ></div>
          <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-grey-dark flex items-center">
                <svg
                  className="text-grey w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="text-black font-bold text-xl mb-2">{model}</div>
              <p className="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={image}
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-black leading-none">{status}</p>
                <p className="text-grey-dark">{price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
