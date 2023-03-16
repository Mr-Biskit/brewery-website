import StyleButton from "@/components/custom/StyleButton";
import React from "react";

function FoodMenu() {
  return (
    <>
      <div className="bg-primary w-screen flex flex-col  justify-center items-center ">
        <h1 className="text-6xl text-white my-2 mx-2 mb-10 mt-16 font-heading">
          Food Menu
        </h1>
        <div className="w-screen flex flex-col my-16 justify-center items-center p-10 rounded-md bg-primary">
          <StyleButton />
        </div>
      </div>
    </>
  );
}

export default FoodMenu;
