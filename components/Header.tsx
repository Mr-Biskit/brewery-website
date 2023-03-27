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
    <header className="w-full  bg-black sticky top-0 z-30 ">
      <div className="flex justify-between">
        <div className="mx-2 mt-4 p-2">
          <Link href={"/"}>
            <Image
              alt="logo"
              src="/images/logoName.png"
              width={150}
              height={200}
              className=""
            />
          </Link>
        </div>
        <div className="mx-3 p-2 my-3 items-center justify-center ">
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
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-black via-primary to-secondary w-screen h-[844px] relative z-20 ">
          <Link href={"#OurStory"} onClick={handleLinkClick}>
            <h3 className="text-[#f2f2f2] font-std font-normal tracking-wider text-xl mt-2 ">
              OUR STORY
            </h3>
          </Link>
          <Link href={"#Menu"} onClick={handleLinkClick}>
            <h3 className="text-white font-std font-normal tracking-wider text-xl">
              MENU
            </h3>
          </Link>
          <Link href={"/contact"} onClick={handleLinkClick}>
            <h3 className="text-white font-std font-normal tracking-wider text-xl">
              ON TAP
            </h3>
          </Link>
          <Link href={"#Sports"} onClick={handleLinkClick}>
            <h3 className="text-white font-std font-normal tracking-wider text-xl">
              SPORT
            </h3>
          </Link>
          <Link href={"/contact"} onClick={handleLinkClick}>
            <h3 className="text-white font-std font-normal tracking-wider text-xl mb-2">
              CONTACT
            </h3>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
