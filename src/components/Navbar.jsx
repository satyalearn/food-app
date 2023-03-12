import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between  w-[100%] bg-black-200 p-2">
      <div className="flex items-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            setNav(!nav);
          }}
        >
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="flex items-center bg-gray-200 rounded-full p-1 text-[15px]">
          <p className="bg-black text-white p-2 rounded-full">Delivery</p>
          <p>Pickup</p>
        </div>
      </div>
      <div className="px-2 w-[300px] sm:w-[400px] md:w-[500px] bg-gray-200 rounded-full flex items-center py-2">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          placeholder="search food"
          className="bg-transparent focus:outline-none px-2 w-full"
        />
      </div>
      <button className="bg-black rounded-full  hidden md:flex items-center text-white cursor-pointer">
        <BsFillCartFill /> <span className="px-1">Cart</span>
      </button>

      {nav && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen z-10 bg-white duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen z-10 bg-white duration-300"
        }
      >
        <AiOutlineClose
          className="absolute right-4 top-4"
          onClick={() => {
            setNav(!nav);
          }}
        />
        <h1 className="text-2xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favourites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best One
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
