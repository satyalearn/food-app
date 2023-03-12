import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, SetFoods] = useState(data);
  console.log(foods);

  const filterType = (category) => {
    SetFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    SetFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-center text-4xl ">
        Top Rated Menu Items
      </h1>

      {/* fiter row */}
      <div className="flex flex-col lg:flex-row  justify-between">
        {/* Filter Type    */}
        <div>
          <p className="font-bold text-gray-700">filter Type</p>
          <div>
            <button
              onClick={() => {
                SetFoods(data);
              }}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => {
                filterType("burgers");
              }}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>

            <button
              onClick={() => {
                filterType("pizza");
              }}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => {
                filterType("salad");
              }}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => {
                filterType("chicken");
              }}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => {
                filterPrice("$");
              }}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => {
                filterPrice("$$");
              }}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => {
                filterPrice("$$$");
              }}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => {
                filterPrice("$$$$");
              }}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {foods.map((item, index) => {
          return (
            <div
              key={index}
              className="border shadow-lg hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between p-2 py-4 flex-wrap">
                <p className="font-bold ">{item.name}</p>
                <p>
                  <span className="bg-orange-500 px-2 text-white p-1 rounded-full mt-2">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
