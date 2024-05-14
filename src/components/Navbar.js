import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-3 text-slate-800">
            <div className="navbar__link cursor-pointer">Home</div>
            <div className="navbar__link cursor-pointer">Categories</div>
            <div className="navbar__link cursor-pointer">{`MEN'S`}</div>
            <div className="navbar__link cursor-pointer">{`WOMEN'S`}</div>
            <div className="navbar__link cursor-pointer">Jewerly</div>
            <div className="navbar__link cursor-pointer">Perfume</div>
            <div className="navbar__link cursor-pointer">Hot Offers</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
