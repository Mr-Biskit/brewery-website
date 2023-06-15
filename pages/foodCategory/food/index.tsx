import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MenuCategory } from "@/lib/types";
import { GetStaticProps } from "next";
import { getMenuCategory } from "@/lib/fetchData";

type FoodMenuProps = {
  menuCategory: MenuCategory[];
};

const handleClick = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const FoodMenu: React.FC<FoodMenuProps> = ({ menuCategory }) => {
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    if (router.query.category) {
      scrollToSection(router.query.category as string);
    }
  }, [router.query]);
  return (
    <div className="bg-primary w-screen flex flex-col  justify-center items-center ">
      <h1 className="text-6xl text-white my-2 mx-2 mt-16 font-heading lg:text-9xl">
        Food MeNu
      </h1>
      <div className="w-screen flex-col lg:flex">
        <div className="w-screen lg:fixed lg:left-0 lg:right-0 lg:w-1/3">
          <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-2 gap-y-4 justify-items-center my-6 p-1 rounded-md w-screen lg:w-auto">
            {menuCategory.map((category, key) => (
              <li key={key}>
                <div
                  className="custom-button rounded-none"
                  onClick={() => handleClick}
                >
                  <span className=" text-xl lg:text-4xl font-heading">
                    {category.category}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-screen flew flex-col justify-center items-center lg:w-2/3 lg:items-end ">
          {menuCategory.map((category, index) => (
            <section id={category.category} key={index}>
              <div className="w-screen h-[96px]" />
              <div className="flex flex-col justify-center items-center mx-2 p-2">
                <h2 className="text-3xl text-white my-2 mx-2 mt-8 font-heading md:text-4xl text-right">
                  {category.category}
                </h2>
                <ul className=" justify-items-center my-2 p-1 rounded-md w-screen">
                  {category.menuItems.map((item, key) => (
                    <li
                      className=" p-2 text-left border-white text-white mx-2 font-heading"
                      key={key}
                    >
                      <header className="flex ">
                        <h3 className="text-xl text-white font-bebas md:text-2xl ">
                          {item.heading}
                        </h3>
                      </header>
                      <p className="text-sm text-white font-std md:text-xl ">
                        {item.subHeading}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;

export const getStaticProps: GetStaticProps<FoodMenuProps> = async () => {
  const menuCategory = await getMenuCategory();
  return {
    props: {
      menuCategory,
    },
  };
};
