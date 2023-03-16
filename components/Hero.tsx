import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";

function Hero() {
  return (
    <div className="bg-hero-pattern bg-bg-cover lg-bg-[length:1280px_720px] flex flex-col justify-center items-center w-screen h-screen">
      <div className="flex justify-center items-center mx-4 my-4 mb-10 bg-black rounded-lg p-4">
        <Image
          className="lg:w-[500px] lg:h-[200px]"
          alt="hero"
          src="/images/logoName.png"
          width={300}
          height={300}
        />
      </div>
      <div className="justify-center items-center flex flex-col my-3 mx-4 space-x-2 space-y-6">
        <Link href={"/"}>
          <div className="flex justify-center items-center text-white bg-black/60 rounded-md font-heading text-3xl lg:text-xl tracker-wide text-center p-3 border border-white hover:bg-black/80">
            Book a Table
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex justify-center items-center text-white bg-black/60 rounded-full font-std text-md tracker-wide text-center p-2 border border-white hover:bg-black/80">
            <MapPinIcon className="h-6 w-6" />
          </div>
        </Link>
        <div className="flex justify-evenly w-1/2 lg:w-1/3 mx-4 space-x-4">
          <div className="flex justify-center items-center text-white bg-black/60 rounded-full font-std text-md tracker-wide text-center  border border-white hover:bg-black/80 h-10 w-10">
            <SocialIcon
              url="https://www.instagram.com/lionsheadrestaurantbrewery/"
              bgColor="transparent"
              fgColor="white"
            />
          </div>
          <div className="flex justify-center items-center text-white bg-black/60 rounded-full font-std text-md tracker-wide text-center  border border-white hover:bg-black/80 h-10 w-10">
            <SocialIcon
              url="https://nl.pinterest.com/homemydesign/"
              bgColor="transparent"
              fgColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
