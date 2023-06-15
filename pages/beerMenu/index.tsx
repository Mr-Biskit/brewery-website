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
    <div className="min-h-screen flex flex-col lg:h-screen lg:overflow-hidden lg:bg-[#070D0D]">
      <div className="flex flex-col bg-[#070D0D] relative w-full lg:w-auto h-screen  ">
        <div className="hidden lg:block lg:absolute lg:z-10 lg:w-3/5 lg:h-1/3 lg:top-24 lg:left-1/2 lg:transform lg:-translate-x-1/2 shadow-sm shadow-black 2xl:h-[310px] 2xl:top-44 image-with-shadow">
          <Image alt="bgPic" src="/Images/beerCover.png" fill />
          <div className="w-full h-full bg-gradient-to-l from-[#0F0F11]/80 via-transparent to-transparent" />
        </div>
        {/* Middle Content */}
        <div className="flex w-full h-[321px] md:h-3/6 xl:h-3/6">
          {/* Title Div */}
          <div className="flex justify-center items-center w-full space-x-2 absolute z-10 top-2 ">
            <h1 className="text-white font-heading text-[32px] lg:text-[40px] text-center tracking-wider 2xl:text-3xl">
              BeEr{" "}
            </h1>
            <div className="h-[70px] w-[80px] relative 2xl:h-[90px] 2xl:w-[100px]">
              {" "}
              <Image alt="logo" src="/Component/Logo.png" fill />
            </div>

            <h1 className="text-white font-heading text-[32px] lg:text-[40px] text-center tracking-wider 2xl:text-3xl">
              MeNu{" "}
            </h1>
          </div>

          {/* Left Side */}
          <div className="flex flex-col w-[50%] h-full relative overflow-hidden">
            <div className="h-3/5 relative lg:h-full">
              <Image alt="bgPicMobile" src="/Images/table.jpeg" fill />
            </div>
            <div className="hidden lg:w-3/5 lg:h-2/6 lg:absolute lg:z-10">
              <Image alt="bgPic" src="/Images/beer5.jpeg" fill />
            </div>
            <div className="flex flex-col w-full h-full mx-0 absolute z-4 mb-4 bg-[#0F0F11]/80">
              <motion.div
                animate={controlsLeft}
                className="flex flex-col w-full h-full mt-28 pt-20 lg:mt-32 lg:space-y-4 space-y-3 lg:ml-4 lg:pt-1"
              >
                <h1 className="text-[#FFC700] font-heading text-[36px] text-left ml-2 tracking-wider md:text-5xl lg:text-5xl">
                  {selectedBeer.title}
                </h1>
                <h2 className="text-white font-std font-bold text-[16px] text-left ml-2 tracking-wider lg:text-2xl lg-pre-wrap">
                  {selectedBeer.type.split(" ").join("\n")}
                </h2>
              </motion.div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col w-[50%] h-full overflow-hidden lg:flex-row lg:justify-center lg:items-center lg:p-4">
            <div className="h-2/5 lg:h-full lg:w-3/4 " />
            <motion.div
              animate={controlsRight}
              className="h-3/5 relative lg:h-4/5 lg:w-2/5 lg:p-6 lg:shadow-lg lg:shadow-[#575757] lg:mt-20"
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
        <div className="lg:flex  md:h-1/6 lg:w-full lg:h-1/5 w-full">
          <div className="w-full h-auto bg-gradient-to-r from-black  to-[#1D1D20] flex  lg:w-4/5 lg:h-full ">
            {/* Mobile Section */}
            <motion.div
              animate={controlsUp}
              className="flex flex-col w-3/4 h-full lg:hidden"
            >
              <p className="text-white w-full h-auto font-std text-left text-[12px] ml-2 mt-2 ">
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
              className="flex flex-col w-1/4 h-full p-2 lg:hidden"
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

            {/* Desktop Version */}
            <motion.div
              animate={controlsUp}
              className="hidden lg:flex flex-col w-2/6 h-full ml-6"
            >
              <p className="text-white w-full font-std  text-[14px]  mt-1 writing-mode-vertical-lr text-left lg:text-md xl:text-[16px]">
                {selectedBeer.description}
              </p>
            </motion.div>
            <motion.div
              animate={controlsUp}
              className="hidden lg:flex w-3/6 h-full justify-center items-center p-1 space-x-3"
            >
              <div className="flex flex-col w-full h-full justify-center items-center p-1 space-y-1">
                <div className="flex items-center">
                  <Image
                    alt="svg-icon"
                    src="/Component/hops.svg"
                    width="30"
                    height="30"
                  />
                  <h3 className="text-[#B1AC9D] font-std text-std text-left text-[14px] ml-2 mt-1 lg:text-xl">
                    HOPS
                  </h3>
                </div>
                <div className="flex flex-wrap w-full justify-center items-center ml-2">
                  {selectedBeer.hops.map((hop, index) => (
                    <div
                      className="rounded-lg bg-[#575757] px-2 py-1 m-1 text-white inline-flex items-center border border-[#FFC700]"
                      key={index}
                    >
                      <span className="ml-1 text-sm">{hop}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-full h-full justify-center items-center p-1 space-y-1">
                <div className="flex items-center">
                  <Image
                    alt="svg-icon"
                    src="/Component/maltz.svg"
                    width="30"
                    height="30"
                  />
                  <h3 className="text-[#B1AC9D] font-std text-std text-left text-[14px] ml-2 mt-1 lg:text-xl">
                    MALTS
                  </h3>
                </div>
                <div className="flex flex-wrap w-full justify-center items-center ml-2">
                  {selectedBeer.malts.map((malt, index) => (
                    <div
                      className="rounded-lg bg-[#575757] px-1 py-1 m-1 text-white inline-flex items-center border border-[#FFC700]"
                      key={index}
                    >
                      <span className="ml-1 text-sm">{malt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={controlsPop}
              className="hidden lg:flex flex-col w-1/6 h-full "
            >
              <div className="flex flex-col w-full h-full justify-center items-center p-1">
                <div className="flex w-full justify-center items-center space-x-2">
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
          <motion.div
            className="lg:flex h-full p-2 hidden w-1/5 justify-center items-center "
            animate={controlsRight}
          >
            <div className=" custom-button">
              <span className=" text-3xl font-heading">FoOd MeNu</span>
            </div>
          </motion.div>
        </div>

        {/* Beer Cards */}
        <div className="flex flex-col w-full h-[300px] lg:flex-row lg:h-[200px] ">
          <div className="grid grid-cols-3 bg-gradient-to-b from-transparent to-[#1D1D20]  w-full h-1/2 lg:h-full lg:w-1/2">
            {firstHalf.map((beer, index) => (
              <BeerCard
                key={beer._id}
                beer={beer}
                onBeerSelect={handleBeerSelect}
                index={index}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 bg-gradient-to-b from-black to-transparent  w-full h-1/2 lg:h-full lg:w-1/2">
            {secondHalf.map((beer, index) => (
              <BeerCard
                key={beer._id}
                beer={beer}
                onBeerSelect={handleBeerSelect}
                index={index}
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
