import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full  bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's out, BOGO's</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Card1"
        />
      </div>

      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full  bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Deserts Too</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Card1"
        />
      </div>

      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full  bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restarants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/3184191/pexels-photo-3184191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Card1"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
