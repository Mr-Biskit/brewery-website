import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/scale-out-animation/scale-out-animation.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={5000}
    bullets={false}
    organicArrows={false}
    fillParent={true}
    animation="scaleOutAnimation"
    cssModule={[CoreStyles, AnimationStyles]}
  >
    <div data-src="/Sport/f1.jpeg" />
    <div data-src="/Sport/rugby.jpeg" />
    <div data-src="/Sport/soccer.jpeg" />
  </AutoplaySlider>
);

function Sports() {
  return (
    <div className="w-screen flex flex-col my-16 justify-center items-center bg-black">
      <h1 className="text-6xl text-white my-2 mx-2 mb-10 font-heading">
        Sports
      </h1>
      <div className="justify-center items-center flex  flex-col w-screen">
        <h2 className="text-4xl text-white my-2 mx-2 ml-8 mb-10 font-heading uppercase flex">
          We{" "}
          <span className="te">
            <HeartIcon className="h-12 w-12 mx-4 animate-bounce text-red-600" />
          </span>{" "}
          Sports
        </h2>
        <p className="text-white text-sm mx-4 my-3 font-std">
          Our restaurant is the perfect place for sports fans. We love sports
          and we always show the games. Come here to enjoy a delicious meal and
          a hand-crafted beer while watching the action.
        </p>
        <div className="flex flex-col justify-center items-center relative w-[300px] my-2 border-2 rounded-lg border-white mx-3 h-[200px] object-fill">
          {slider}
        </div>
        <p className="text-white text-sm mx-4 my-3 font-std">
          Give us a call to see if we can show your game. We're passionate about
          sports and we're always excited to share the experience with our
          customers. Join us for a game and enjoy great food and drink in a fun,
          friendly atmosphere.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-screen my-10">
        <Link href={"/"}>
          <div className="flex justify-center items-center text-white bg-black/60 rounded-md font-heading text-3xl lg:text-xl tracker-wide text-center p-3 border mx-4 border-white hover:bg-black/80 mb-16">
            View Sport Schedule
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sports;
