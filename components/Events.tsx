import React from "react";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Events() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="w-screen bg-primary justify-center items-center flex flex-col pt-20 pb-16 lg:px-16 px-4">
      <h1 className="text-6xl text-light text-center my-2 mx-2 mt-16 font-heading md:text-7xl lg:text-8xl">
        PArTy InQuIrY
      </h1>
      <h2 className="text-3xl text-white text-center mx-4 my-2 uppercase font-heading md:text-4xl lg:text-5xl">
        Full Bar Buyouts or Private Events
      </h2>
      <p className="text-light text-sm mx-4 my-3 font-std md:text-base lg:text-lg lg:text-center">
        We offer everything from casual drinks after work to open bar packages
        to our chef&apos;s party food platters! We can work with any budget and
        help you choose the type of party package that is right for you & your
        guests. We offer open bar packages, drink specials, passed hors
        d&apos;oeuvres, buffet service, party platters, hosted trivia, or
        simply, reserved space.
      </p>
      <div
        className=" w-full flex  justify-center mt-10 space-x-3 p-4"
        ref={ref}
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { translateY: -400, opacity: 0 },
            visible: { translateY: 0, opacity: 1 },
          }}
          transition={{ delay: 0.2, duration: 1 }}
          className="lg:w-1/4 lg:h-[250px] h-[150px] w-[250px] relative  "
        >
          <Image src="/Images/events2.jpeg" alt="Left Image" fill />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { translateY: -400, opacity: 0 },
            visible: { translateY: 0, opacity: 1 },
          }}
          transition={{ delay: 0.4, duration: 1 }}
          className="lg:w-1/4 lg:h-[250px] h-[150px] w-[250px] relative "
        >
          <Image src="/Images/events3.jpeg" alt="Right Image" fill />
        </motion.div>
      </div>
      <div className=" w-full flex  justify-center  space-x-3 mb-20 p-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { translateY: -400, opacity: 0 },
            visible: { translateY: 0, opacity: 1 },
          }}
          transition={{ delay: 0.8, duration: 1 }}
          className="lg:w-1/4 lg:h-[250px] h-[150px] w-[250px] relative  mt-3 lg:mt-0"
        >
          <Image src="/Images/events.jpeg" alt="Center Image" fill />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { translateY: -400, opacity: 0 },
            visible: { translateY: 0, opacity: 1 },
          }}
          transition={{ delay: 1, duration: 1 }}
          className="lg:w-1/4 lg:h-[250px] h-[150px] w-[250px] relative  mt-3 lg:mt-0"
        >
          <Image src="/Images/events2.jpeg" alt="Center Image" fill />
        </motion.div>
      </div>
    </div>
  );
}

export default Events;
