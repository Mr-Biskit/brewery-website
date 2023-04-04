import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        className="absolute z-10 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/video.mp4"
      />
      <div className="absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="h-[70px] w-[80px] lg:h-[100px] lg:w-[110px] relative 2xl:h-[90px] 2xl:w-[100px]">
          <Image alt="logo" src="/Component/Logo.png" fill />
        </div>
      </div>
    </div>
  );
}

export default Hero;
