import React from "react";
import { BsSearch } from "react-icons/bs";
import { TbBrandAppgallery } from "react-icons/tb";
import { BiUser, BiHeart, BiShoppingBag, BiMenu, BiHome } from "react-icons/bi";

const MobileNavbar = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 w-full bg-white left-1/2 -translate-x-1/2 px-8">
      <div className="flex justify-between text-xl py-2">
        <BiMenu />
        <div className="relative">
          <BiShoppingBag />
          <div className="header_main__icon_badge">0</div>
        </div>

        <BiHome />

        <div className="relative">
          <BiHeart />
          <div className="header_main__icon_badge">0</div>
        </div>

        <TbBrandAppgallery />
      </div>
    </nav>
  );
};

export default MobileNavbar;
