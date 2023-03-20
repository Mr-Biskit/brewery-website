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
        <div className="flex flex-col justify-center items-center bg-secondary rounded-md w-[360px] border md:p-4 border-white">
          <h2 className="text-2xl md:text-4xl text-white mx-2 font-heading">
            DownLoad Menu
          </h2>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-x-2 md:gap-y-32 my-10 justify-items-center p-4 rounded-md w-screen">
          {menuCategory.map((category) => (
            <li
              key={category.category}
              className="flex flex-col items-center relative h-[190px] w-[167px] md:h-[390px] md:w-[389px]"
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
                  className="h-[167px] w-[167px] md:h-[357px] md:w-[357px] object-cover rounded-sm"
                />
                <span className="absolute bottom-0 bg-secondary p-2 md:p-6 border-[0.5px] md:border border-white text-2xl md:text-4xl text-white mx-2 font-heading">
                  {category.category}
                </span>
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
