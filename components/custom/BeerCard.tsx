import React from "react";
import Image from "next/image";
import { Beer } from "@/lib/types";
import { urlFor } from "@/lib/sanityClient";

type BeerCardProps = {
  beer: Beer;
  onBeerSelect: (beer: Beer) => void;
};

const BeerCard: React.FC<BeerCardProps> = React.memo(
  ({ beer, onBeerSelect }) => {
    return (
      <div
        className="w-auto h-full flex justify-center items-center p-4 mx-2 transform hover:scale-110 opacity-50 hover:opacity-100 transition-opacity duration-300"
        onClick={() => onBeerSelect(beer)}
      >
        <div className="w-1/3 justify-center items-center">
          <svg
            width="17"
            height="43"
            viewBox="0 0 17 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.5" y1="1" x2="0.5" y2="43" stroke="#725110" />
            <line y1="0.5" x2="16.0312" y2="0.5" stroke="#725110" />
            <line y1="42.5" x2="16.0312" y2="42.5" stroke="#725110" />
          </svg>
        </div>
        <div className="w-2/3 h-full flex flex-col justify-center items-center space-y-2">
          <div className="w-[44px] h-[86px] relative">
            <Image alt="beerPic" src={urlFor(beer.image).url()!} fill />
          </div>
          <h1 className="text-white font-std text-[11px] text-center w-[67px] h-[19px]">
            {beer.title}
          </h1>
        </div>
      </div>
    );
  }
);

export default BeerCard;
