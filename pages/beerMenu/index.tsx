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
      <div className="flex flex-col bg-[#070D0D] relative w-full md:w-auto h-screen  ">
        <div className="hidden md:block md:absolute md:z-10 md:w-3/5 md:h-[250px] md:top-24 md:left-1/2 md:transform md:-translate-x-1/2 shadow-sm shadow-black 2xl:h-[310px] 2xl:top-44 image-with-shadow">
          <Image alt="bgPic" src="/Images/beerCover.png" fill />
          <div className="w-full h-full bg-gradient-to-l from-[#0F0F11]/80 via-transparent to-transparent" />
        </div>
        {/* Middle Content */}
        <div className="flex w-full h-[321px] xl:h-3/6">
          {/* Title Div */}
          <div className="flex justify-center items-center w-full space-x-2 absolute z-10 top-2 ">
            <h1 className="text-white font-heading text-[32px] md:text-[40px] text-center tracking-wider ">
              BeEr{" "}
            </h1>
            <div className="h-[70px] w-[80px] relative ">
              {" "}
              <Image alt="logo" src="/Component/Logo.png" fill />
            </div>

            <h1 className="text-white font-heading text-[32px] md:text-[40px] text-center tracking-wider ">
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
                className="flex flex-col w-full h-full mt-52 md:mt-32 md:space-y-4 md:ml-4"
              >
                <h1 className="text-[#FFC700] font-heading text-[36px] text-left ml-2 tracking-wider md:text-5xl">
                  {selectedBeer.title}
                </h1>
                <h2 className="text-white font-std font-bold text-[16px] text-left ml-2 tracking-wider md:text-2xl md-pre-wrap">
                  {selectedBeer.type.split(" ").join("\n")}
                </h2>
                <h3 className="text-[#B1AC9D] font-std text-std text-left tracking-wider text-[16px] ml-2 mt-2">
                  DESCRIPTION
                </h3>
              </motion.div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col w-[50%] h-full overflow-hidden md:flex-row md:justify-center md:items-center md:p-4">
            <div className="h-2/5 md:h-full md:w-3/4 " />
            <motion.div
              animate={controlsRight}
              className="h-3/5 relative md:h-4/5 md:w-2/5 md:p-6 md:shadow-lg md:shadow-[#575757] md:mt-20"
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
        <div className="md:flex  md:w-full md:h-1/6 w-full">
          <div className="w-full h-[144px] bg-gradient-to-r from-black  to-[#1D1D20] flex  md:w-4/5 md:h-full ">
            {/* Mobile Section */}
            <motion.div
              animate={controlsUp}
              className="flex flex-col w-3/4 h-full md:hidden"
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
              className="flex flex-col w-1/4 h-full p-2 md:hidden"
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
              className="hidden md:flex flex-col w-2/6 h-full ml-6"
            >
              <p className="text-white w-full font-std  text-[14px]  mt-1 writing-mode-vertical-lr text-left">
                {selectedBeer.description}
              </p>
            </motion.div>
            <motion.div
              animate={controlsUp}
              className="hidden md:flex w-3/6 h-full justify-center items-center p-1 space-x-3"
            >
              <div className="flex flex-col w-full h-full justify-center items-center p-1 space-y-1">
                <div className="flex items-center">
                  <Image
                    alt="svg-icon"
                    src="/Component/hops.svg"
                    width="24"
                    height="24"
                  />
                  <h3 className="text-[#B1AC9D] font-std text-std text-left text-[14px] ml-2 mt-1">
                    HOPS:
                  </h3>
                </div>
                <div className="flex flex-wrap w-full justify-center items-center ml-2">
                  {selectedBeer.hops.map((hop) => (
                    <div className="rounded-md bg-[#575757] px-2 py-1 m-1 text-white inline-flex items-center border border-[#FFC700]">
                      <span className="ml-1 text-xs">{hop}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-full h-full justify-center items-center p-1 space-y-1">
                <div className="flex items-center">
                  <Image
                    alt="svg-icon"
                    src="/Component/maltz.svg"
                    width="24"
                    height="24"
                  />
                  <h3 className="text-[#B1AC9D] font-std text-std text-left text-[14px] ml-2 mt-1">
                    MALTS:
                  </h3>
                </div>
                <div className="flex flex-wrap w-full justify-center items-center ml-2">
                  {selectedBeer.malts.map((malt) => (
                    <div className="rounded-md bg-[#575757] px-2 py-1 m-1 text-white inline-flex items-center border border-[#FFC700]">
                      <span className="ml-1 text-xs">{malt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={controlsPop}
              className="hidden md:flex flex-col w-1/6 h-full "
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
            className="md:flex h-full p-2 hidden w-1/5 justify-center items-center "
            animate={controlsRight}
          >
            <div className="rounded-md bg-[#575757] px-8 py-2 m-1 text-white inline-flex items-center border border-[#FFC700] hover:scale-110 transform duration-300 cursor-pointer">
              <span className=" text-3xl font-heading">FoOd MeNu</span>
            </div>
          </motion.div>
        </div>

        {/* Beer Cards */}
        <div className="flex flex-col w-full h-[300px] md:flex-row md:h-[150px] ">
          <div className="grid grid-cols-3 bg-gradient-to-b from-transparent to-[#1D1D20]  w-full h-1/2 md:h-full md:w-1/2">
            {firstHalf.map((beer, index) => (
              <BeerCard
                key={beer._id}
                beer={beer}
                onBeerSelect={handleBeerSelect}
                index={index}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 bg-gradient-to-b from-black to-transparent  w-full h-1/2 md:h-full md:w-1/2">
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
