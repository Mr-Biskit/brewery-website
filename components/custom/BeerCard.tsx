import React from "react";
import Image from "next/image";
import { Beer } from "@/lib/types";
import { urlFor } from "@/lib/sanityClient";
import { useMediaQuery } from "react-responsive";

type BeerCardProps = {
  beer: Beer;
  onBeerSelect: (beer: Beer) => void;
  index: number;
};

function BeerCardInner({ beer, onBeerSelect, index }: BeerCardProps) {
  const islgScreen = useMediaQuery({ minWidth: 1024 });
  const showSvg = index % 3 !== 2;
  return (
    <div
      className="w-auto h-full flex justify-center items-center p-4 mx-2 space-x-5 transform hover:scale-110 opacity-50 hover:opacity-100 transition-opacity duration-300 lg:h-full "
      onClick={() => onBeerSelect(beer)}
    >
      <div className="w-1/3 justify-center items-center lg:w-1/4 xl:w-1/5">
        {!islgScreen && (
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
        )}
        {islgScreen && (
          <svg
            width="16"
            height="81"
            viewBox="0 0 16 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.5"
              y1="5"
              x2="2.5"
              y2="81"
              stroke="#725110"
              strokeWidth="5"
            />
            <line y1="2.5" x2="16" y2="2.5" stroke="#725110" strokeWidth="5" />
            <line
              y1="78.5"
              x2="16"
              y2="78.5"
              stroke="#725110"
              strokeWidth="5"
            />
          </svg>
        )}
      </div>
      <div className="w-2/3 h-full flex flex-col justify-center items-center space-y-2  lg:w-3/4 lg:space-y-3">
        <div className="w-[44px] h-[86px] relative xl:w-[60px] xl:h-[126px]">
          <Image alt="beerPic" src={urlFor(beer.image).url()!} fill />
        </div>
        <h1 className="text-white font-std text-[11px] text-center w-[67px] h-[19px] xl:text-xl lg:h-auto lg:w-auto ">
          {beer.title}
        </h1>
      </div>
      {showSvg && (
        <div className="hidden lg:block">
          <svg
            width="2"
            height="110"
            viewBox="0 0 2 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="1" x2="1" y2="110" stroke="#514F4F" stroke-width="2" />
          </svg>
        </div>
      )}
    </div>
  );
}

const BeerCard = React.memo(BeerCardInner);
BeerCard.displayName = "BeerCard";

export default BeerCard;
