import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Menu() {
  return (
    <div className="w-screen flex flex-col my-16 justify-center items-center bg-black">
      <h1 className="text-6xl text-white my-2 mx-2 mb-10 font-heading">MeNu</h1>

      <Link href="/food">
        <div className="justify-center items-center flex  w-screen relative z-10">
          <Image
            src="/images/food1.jpeg"
            alt="menu"
            width={300}
            height={300}
            className="w-screen h-[300px] opacity-50 hover:opacity-80"
          />
          <h2 className="text-4xl text-white my-2 mx-2 mb-10 font-heading absolute uppercase">
            Food Menu
          </h2>
        </div>
      </Link>
      <Link href="/beerMenu">
        <div className="justify-center items-center flex w-screen relative z-10 cursor-pointer">
          <Image
            src="/images/beer6.jpeg"
            alt="menu"
            width={300}
            height={300}
            className="w-screen h-[300px] opacity-50 hover:opacity-60"
          />
          <h2 className="text-4xl text-white my-2 mx-2 mb-10 font-heading absolute uppercase">
            On Tap
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default Menu;
