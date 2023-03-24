import React, { useState, useEffect } from "react";
import Image from "next/image";
import BeerCard from "@/components/custom/BeerCard";
import { GetStaticProps } from "next";
import { Beer } from "@/lib/types";
import { getBeer } from "@/lib/fetchData";
import { urlFor } from "@/lib/sanityClient";
import { motion, useAnimation } from "framer-motion";

type BeerProps = {
  beers: Beer[];
};

const BeerMenu: React.FC<BeerProps> = ({ beers }) => {
  const [selectedBeer, setSelectedBeer] = useState<Beer>(beers[0]);

  const handleBeerSelect = (beer: Beer) => {
    setSelectedBeer(beer);
  };

  const controlsPop = useAnimation();
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const controlsUp = useAnimation();

  const animateEffects = async () => {
    controlsLeft.set({ x: -500, opacity: 0 });
    controlsRight.set({ x: 500, opacity: 0 });
    controlsUp.set({ y: 500, opacity: 0 });
    controlsPop.set({ scale: 0, opacity: 0 });

    // Left animation
    await controlsLeft.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    });

    // Top animation
    await controlsRight.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    });

    // Bottom animation
    await controlsUp.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.4 },
    });

    // Pop animation
    await controlsPop.start({
      scale: [0.5, 1.1, 1],
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 450,
        duration: 0.8,
        delay: 0.6,
      },
    });
  };

  useEffect(() => {
    animateEffects();
  }, [selectedBeer]);

  const halfLength = Math.ceil(beers.length / 2);
  const firstHalf = beers.slice(0, halfLength);
  const secondHalf = beers.slice(halfLength);
  return (
    <div className="min-h-screen flex flex-col md:h-screen md:overflow-hidden md:bg-[#070D0D]">
      <div className="flex flex-col bg-[#070D0D] relative w-full h-auto md:flex-3 md:h-1/4">
        {/* Middle Content */}
        <div className="flex w-full h-[321px] md:[600px]">
          {/* Title Div */}
          <div className="flex justify-center items-center w-full space-x-2 absolute z-10 top-2 ">
            <h1 className="text-white font-heading text-[32px] md:text-[48px] text-center tracking-wider ">
              BeEr{" "}
            </h1>
            <div className="h-[70px] w-[80px] relative md:w-[90px] md:h-[80px]">
              {" "}
              <Image alt="logo" src="/Component/Logo.png" fill />
            </div>

            <h1 className="text-white font-heading text-[32px] md:text-[48px] text-center tracking-wider ">
              MeNu{" "}
            </h1>
          </div>

          {/* Left Side */}
          <div className="flex flex-col w-[50%] h-full relative overflow-hidden">
            <div className="h-3/5 relative md:h-full">
              <Image alt="bgPicMobile" src="/Images/table.jpeg" fill />
            </div>
            <div className="hidden md:w-[905px] md:h-[271px] md:absolute md:z-10">
              <Image alt="bgPic" src="/Images/beer5.jpeg" fill />
            </div>
            <div className="flex flex-col w-full h-full mx-0 absolute z-4 mb-4 bg-[#0F0F11]/80">
              <motion.div
                animate={controlsLeft}
                className="flex flex-col w-full h-full mt-52"
              >
                <h1 className="text-[#FFC700] font-heading text-[36px] text-left ml-2 tracking-wider ">
                  {selectedBeer.title}
                </h1>
                <h2 className="text-white font-std font-bold text-[16px] text-left ml-2 tracking-wider">
                  {selectedBeer.type}
                </h2>
                <h3 className="text-[#B1AC9D] font-std text-std text-left tracking-wider text-[16px] ml-2 mt-2">
                  DESCRIPTION
                </h3>
              </motion.div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col w-[50%] h-full overflow-hidden md:flex-row">
            <div className="h-2/5 md:h-full md:w-3/4" />
            <motion.div
              animate={controlsRight}
              className="h-3/5 relative  md:w-1/4 md:p-6"
            >
              <Image
                alt="beerPic"
                src={urlFor(selectedBeer.secondImage).url()!}
                fill
              />
            </motion.div>
          </div>
        </div>

        {/* Middle Section Beer Description */}
        <div className="w-full h-[144px] bg-gradient-to-r from-[#0F0F11] via-transparent to-[#1D1D20] flex md:flex-2 md:w-4/5 md:h-1/4">
          <motion.div
            animate={controlsUp}
            className="flex flex-col w-3/4 h-full "
          >
            <p className="text-white w-full h-auto font-std text-left text-[12px] ml-2 mt-2">
              {selectedBeer.description}
            </p>
            <h3 className="text-[#B1AC9D] w-full font-std text-std text-left  text-[14px] ml-2 mt-1">
              HOPS:{" "}
              <span className="text-white">
                {selectedBeer.hops.map((hop) => hop).join(", ")}
              </span>
            </h3>
            <h3 className="text-[#B1AC9D] w-full font-std text-std text-left  text-[14px] ml-2 mt-1 ">
              MALTS:{" "}
              <span className="text-white">
                {selectedBeer.malts.map((malt) => malt).join(", ")}
              </span>
            </h3>
          </motion.div>
          <motion.div
            animate={controlsPop}
            className="flex flex-col w-1/4 h-full p-2"
          >
            <div className="flex flex-col w-full h-full justify-center items-center p-1 space-x-2">
              <div className="flex w-full justify-evenly items-center">
                <h1 className="text-[#FFC700] font-heading text-[40px] text-center tracking-wider ">
                  {selectedBeer.alcoholVolume}
                </h1>
                <div className="relative h-10 w-10 justify-center items-center">
                  <Image alt="percent" src="/Component/percentage.svg" fill />
                </div>
              </div>

              <h2 className="text-white font-std font-bold text-[16px] text-center tracking-wider">
                ALC. VOL
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Beer Cards */}
        <div className="flex flex-col w-full h-[300px] md:flex-1 md:flex-row  md:h-1/4">
          <div className="grid grid-cols-3 bg-gradient-to-b from-transparent to-[#1D1D20] w-full h-1/2 md:h-full md:w-1/2">
            {firstHalf.map((beer) => (
              <BeerCard
                key={beer._id}
                beer={beer}
                onBeerSelect={handleBeerSelect}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 bg-gradient-to-b from-black via-transparent to-gray-900 w-full h-1/2 md:h-full md:w-1/2">
            {secondHalf.map((beer) => (
              <BeerCard
                key={beer._id}
                beer={beer}
                onBeerSelect={handleBeerSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerMenu;

export const getStaticProps: GetStaticProps<BeerProps> = async () => {
  const beers = await getBeer();
  return {
    props: {
      beers,
    },
  };
};
