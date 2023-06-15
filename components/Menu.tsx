import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Menu() {
  return (
    <div className="w-screen flex flex-col my-16 justify-center items-center bg-primary">
      <h1 className="text-6xl text-white my-2 mx-2 mb-10 font-heading md:text-7xl lg:text-8xl">
        MeNu
      </h1>

      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-1/3 lg:h-1/3 lg:space-y-10">
        <Link href="/foodCategory" className="lg:w-full">
          <div className="justify-center items-center h-[300px] flex w-screen relative z-10  lg:border-2 lg:border-white lg:rounded-lg lg:w-full lg:h-80 ">
            <Image
              src="/Images/food1.jpeg"
              alt="menu"
              fill
              className=" opacity-60 hover:opacity-80 "
            />
            <h2 className="text-4xl text-white my-2 mx-2 mb-10 font-heading absolute uppercase md:text-4xl lg:text-5xl">
              Food Menu
            </h2>
          </div>
        </Link>
        <Link href="/beerMenu" className="w-full">
          <div className="justify-center h-[300px] items-center flex w-screen relative z-10 cursor-pointer  lg:border-2 lg:border-white lg:rounded-lg lg:w-full lg:h-80 xl:w-120 xl:h-100">
            <Image
              src="/Images/beer6.jpeg"
              alt="menu"
              fill
              className="  opacity-60 hover:opacity-80 "
            />
            <h2 className="text-4xl text-white my-2 mx-2 mb-10 font-heading absolute uppercase md:text-4xl lg:text-5xl">
              On Tap
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
