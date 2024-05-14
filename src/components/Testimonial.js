import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="container py-16 grid-cols-2 px-8 md:px-16">
        <h2 className="font-bold text-2xl pb-4">Testimonials</h2>

        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border-none hover:shadow-lg rounded-2xl grid place-items-center p-6 lg:p-8">
            <div className="text-center flex flex-col items-center gap-1">
              <Image
                className="rounded-full inline-block"
                src="/user.jpg"
                width={80}
                height={80}
                alt="profile"
              />
              <h2 className="text-gray-500 font-black text-lg">Elsa Doe</h2>
              <p>CEO & Founder Invision</p>
              <Image
                className="inline-block py-2"
                src="/quotes.svg"
                width={30}
                height={30}
                alt="quote"
              />
              <p className="min-w-[200px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, autem. Ad ab dolores nemo unde, quam amet praesentium
                optio! Quis voluptatem soluta minima odio doloribus quaerat
                cumque maxime ipsum. A!
              </p>
            </div>
          </div>
          <div className="bg-red-600 bg-hero-image bg-cover h-[500px] rounded-2xl grid place-items-center hover:shadow-lg transition-all ease-in duration-400 cursor-pointer">
            <div className="bg-gray-200 min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3 shadow-lg">
              <button className="bg-slate-900 text-white p-2 border-none rounded-md">25% Discount</button>
              <h2 className="font-extrabold text-2xl text-slate-900">Summer Collection</h2>
              <p className="text-gray-500 text-lg">
                Starting at $20 <strong>Shop now</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
