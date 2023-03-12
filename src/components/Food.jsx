import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setfoods] = useState(data);
  console.log(foods);
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
            <button className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Burgers
            </button>
            <button className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Salads
            </button>
            <button className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
