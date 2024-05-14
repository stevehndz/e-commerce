import Image from "next/image";
import React from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({ img, title, desc, rating, price }) => {
  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-lg text-orange-400">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

      case 2:
        return (
          <div className="flex gap-1 text-lg text-orange-400">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-lg text-orange-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-lg text-orange-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-lg text-orange-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
    }
  };

  return (
    <div className="px-4 border-none rounded-xl max-w-[300px] hover:shadow-lg ease-out transition-all duration-400 cursor-pointer">
      <div>
        <Image
          className="w-full h-auto rounded-lg"
          src={img}
          width={200}
          height={200}
          alt="title"
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-rose-400 font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>

        <div className="font-bold flex gap-4">
          ${parseInt((price) * 0.8)}
          <del className="text-gray-500 font-normal">
            ${price}
          </del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
