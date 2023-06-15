import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function Sports() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="w-screen flex flex-col my-16 justify-center items-center bg-primary">
      <h1 className="text-6xl text-white my-2 mx-2 mb-10 font-heading md:text-7xl lg:text-8xl">
        Sports
      </h1>
      <div className="justify-center items-center flex  flex-col w-screen">
        <h2 className="text-4xl text-white my-2 mx-2 ml-8 mb-10 font-heading uppercase flex md:text-5xl lg:text-6xl">
          We{" "}
          <span className="te">
            <HeartIcon className="h-12 w-12 mx-4 animate-bounce text-yellow" />
          </span>{" "}
          Sports
        </h2>
        <p className="text-white text-sm md:text-center mx-4 my-3 font-std md:text-base lg:text-xl">
          Our restaurant is the perfect place for sports fans. We love sports
          and we always show the games. Come here to enjoy a delicious meal and
          a hand-crafted beer while watching the action.
        </p>
        <div className="flex w-full h-auto p-2 mt-8 mb-8 justify-center items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { translateY: -400, opacity: 0 },
              visible: { translateY: 0, opacity: 1 },
            }}
            transition={{ delay: 0.2, duration: 1 }}
            ref={ref}
            className="lg:w-1/4 lg:h-[250px] h-[150px] w-[250px] relative"
          >
            <Image src="/Sport/f1.jpeg" fill alt="Picture of F1 race car" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { translateY: -400, opacity: 0 },
              visible: { translateY: 0, opacity: 1 },
            }}
            transition={{ delay: 0.4, duration: 1 }}
            ref={ref}
            className="lg:w-1/4 lg:h-[250px] h-[150px] w-[250px] relative"
          >
            <Image src="/Sport/rugby.jpeg" fill alt="Picture of rugby ball" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { translateY: -400, opacity: 0 },
              visible: { translateY: 0, opacity: 1 },
            }}
            transition={{ delay: 0.6, duration: 1 }}
            ref={ref}
            className="lg:w-1/4 lg:h-[250px] h-[150px] w-[250px] relative"
          >
            <Image src="/Sport/soccer.jpeg" fill alt="Picture of soccer ball" />
          </motion.div>
        </div>
        <p className="text-white text-sm mx-4 my-3 font-std md:text-base lg:text-xl md:text-center">
          Give us a call to see if we can show your game. We're passionate about
          sports and we're always excited to share the experience with our
          customers. Join us for a game and enjoy great food and drink in a fun,
          friendly atmosphere.
        </p>
      </div>
    </div>
  );
}

export default Sports;
