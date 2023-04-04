import StyleButton from "@/components/custom/StyleButton";
import React from "react";
import { MenuCategory } from "@/lib/types";
import { GetStaticProps } from "next";
import { getMenuCategory } from "@/lib/fetchData";
import { urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import Link from "next/link";

type FoodMenuProps = {
  menuCategory: MenuCategory[];
};

const FoodCategory: React.FC<FoodMenuProps> = ({ menuCategory }) => {
  return (
    <>
      <div className="bg-primary w-screen flex flex-col  justify-center items-center ">
        <h1 className="text-6xl text-white my-2 mx-2 mb-10 mt-16 font-heading md:text-9xl">
          Food MeNu
        </h1>
        <div className="custom-button">
          <h2 className="text-2xl md:text-4xl mx-2 font-heading">
            DownLoad Menu
          </h2>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-x-2 md:gap-y-32 my-10 justify-items-center p-4 rounded-md w-screen">
          {menuCategory.map((category) => (
            <li
              key={category.category}
              className="flex flex-col items-center relative h-[190px] w-[167px] lg:h-[390px] lg:w-[389px] transform hover:scale-110 transition-transform duration-300"
            >
              <Link
                href={{
                  pathname: "/foodCategory/food",
                  query: { category: category.category },
                }}
                className="flex flex-col items-center"
              >
                <Image
                  src={urlFor(category.image).url()!}
                  alt={category.category}
                  width={167}
                  height={167}
                  className="h-[167px] w-[167px] lg:h-[357px] lg:w-[357px] object-cover rounded-sm"
                />
                <div className="absolute bottom-0 custom-button rounded-none">
                  <span className=" text-xl lg:text-4xl font-heading">
                    {category.category}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FoodCategory;

export const getStaticProps: GetStaticProps<FoodMenuProps> = async () => {
  const menuCategory = await getMenuCategory();
  return {
    props: {
      menuCategory,
    },
  };
};
