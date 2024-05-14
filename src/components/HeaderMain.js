import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser, BiHeart, BiShoppingBag } from "react-icons/bi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-3 px-8 md:px-16">
      <div className="container sm:flex gap-4 justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-slate-800 cursor-pointer">
          Kouture
        </div>
        <div className="w-full sm:w-fit md:w-9/12 relative">
          <input
            className="header_main__search_input"
            type="text"
            placeholder="Enter product name..."
          />
          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400 focus:text-rose-400"
            size={20}
          />
        </div>

        <div className="hidden lg:flex text-gray-500 text-3xl gap-4">
          <BiUser className="cursor-pointer header_main__icon" />
          <div className="relative cursor-pointer">
            <BiHeart className="header_main__icon" />
            <div className="header_main__icon_badge">0</div>
          </div>
          <div className="relative cursor-pointer">
            <BiShoppingBag className="header_main__icon" />
            <div className="header_main__icon_badge">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
