import React from "react";
import Image from "next/image";

const Slide = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white to-transparent opacity-75" />
      <div className="absolute left-[30px] md:left-[70px] max-w-full sm:max-w-[350px] top-1/2 -translate-y-1/2 space-y-2 lg:space-y-4 bg-gray-200 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="bg-rose-400 text-white text-base md:text-3xl py-1 md:py-2 px-4 rounded-e-2xl">
          {title}
        </h3>
        <h2 className="text-slate-800 text-xl md:text-4xl font-bold leading-relaxed">
          {mainTitle}
        </h2>

        <h3 className="text-base md:text-2xl text-gray-600">
          Starting at{" "}
          <strong className="text-lg md:text-3xl">{price}</strong>.00
        </h3>

        <div className="bg-rose-400 text-white font-semibold text-sm md:text-base p-1 md:p-2 px-4 rounded-lg inline-block hover:bg-slate-900 transition-all ease-in-out duration-300 cursor-pointer">Shop Now</div>
      </div>

      <Image className="min-h-[250px] sm:min-h-fit bg-cover" src={img} alt="banner" width={1600} height={600} />
    </div>
  );
};

export default Slide;
