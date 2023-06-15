import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = useState(false);

  function handleLinkClick() {
    setOpen(!isOpen);
  }

  return (
    <header className="w-full lg:bg-black/40 bg-black sticky top-0 z-30 ">
      <div className="flex justify-between">
        <div className="mx-2 lg:my-2 lg:p-1 mt-4 p-2">
          <Link href={"/"}>
            <div className="w-[150px] h-[50px] lg:w-[200px] lg:h-[60px] relative">
              <Image alt="logo" src="/Images/logoName.png" fill />
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4 items-center p-2">
          <Link href="/#OurStory">
            <h3 className="text-[#f2f2f2] font-std font-normal tracking-wider text-md  cursor-pointer transform hover:scale-110 opacity-50 hover:opacity-100 transition-opacity duration-300 ">
              OUR STORY
            </h3>
          </Link>
          <Link href="/foodCategory">
            <h3 className="text-white font-std font-normal tracking-wider text-md cursor-pointer transform hover:scale-110 opacity-50 hover:opacity-100 transition-opacity duration-300">
              MENU
            </h3>
          </Link>
          <Link href="/beerMenu">
            <h3 className="text-white font-std font-normal tracking-wider text-md cursor-pointer transform hover:scale-110 opacity-50 hover:opacity-100 transition-opacity duration-300">
              ON TAP
            </h3>
          </Link>
          <Link href="/#Contact">
            <h3 className="text-white font-std font-normal tracking-wider text-md  cursor-pointer transform hover:scale-110 opacity-50 hover:opacity-100 transition-opacity duration-300">
              CONTACT
            </h3>
          </Link>
          <Link href="/blog">
            <h3 className="text-white font-std font-normal tracking-wider text-md cursor-pointer transform hover:scale-110 opacity-50 hover:opacity-100 transition-opacity duration-300">
              BLOG
            </h3>
          </Link>
          <Link href={"/reservations"}>
            <div className="rounded-md  px-3 py-1 mr-2 custom-button">
              <span className=" text-3xl font-heading">ReSeRvAtIoN</span>
            </div>
          </Link>
        </div>
        <div className="mx-3 p-2 my-3 items-center justify-center lg:hidden">
          <Hamburger
            toggled={isOpen}
            onToggle={() => setOpen(!isOpen)}
            color="#ffff"
            size={40}
            easing="ease-in"
          />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center mt-10 md:mt-40 bg-gradient-to-b from-black via-primary to-secondary w-screen h-screen relative z-20 ">
          <div className="flex flex-col justify-center items-center  space-y-12 p-6 md:p-20 md:space-y-20 ">
            <Link
              href={"/#OurStory"}
              onClick={handleLinkClick}
              className="border-b-2 border-white"
            >
              <h3 className="text-[#f2f2f2] font-bebas tracking-widest text-2xl mt-2 ">
                OUR STORY
              </h3>
            </Link>
            <Link
              href={"/foodCategory"}
              onClick={handleLinkClick}
              className="border-b-2 border-white"
            >
              <h3 className="text-white font-bebas tracking-widest text-2xl mt-2 ">
                MENU
              </h3>
            </Link>
            <Link
              href={"/beerMenu"}
              onClick={handleLinkClick}
              className="border-b-2 border-white"
            >
              <h3 className="text-white font-bebas tracking-widest text-2xl mt-2 ">
                ON TAP
              </h3>
            </Link>
            <Link
              href={"/#Contact"}
              onClick={handleLinkClick}
              className="border-b-2 border-white"
            >
              <h3 className="text-white font-bebas tracking-widest text-2xl mt-2 ">
                CONTACT
              </h3>
            </Link>
            <Link
              href={"/blog"}
              onClick={handleLinkClick}
              className="border-b-2 border-white"
            >
              <h3 className="text-white font-bebas tracking-widest text-2xl mt-2 ">
                BLOG
              </h3>
            </Link>
            <Link href={"/reservations"} onClick={handleLinkClick}>
              <div className="rounded-md bg-[#575757] px-8 py-2 m-1 text-white inline-flex items-center border-2 border-[#FFC700] hover:scale-110 transform duration-300 cursor-pointer">
                <span className=" text-3xl font-heading">ReSerVaTions</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
