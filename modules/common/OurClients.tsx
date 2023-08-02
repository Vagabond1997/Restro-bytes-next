"use client";
import { Grid } from "@mantine/core";
import burger from "../../assets/img/burgerhouse.png";
import syanko from "../../assets/img/syanko.png";
import Image from "next/image";

export const OurClients = () => {
  return (
    <div className="w-full max-w-full py-xl">
      <div className="flex justify-center">
        <div className="w-3/7">
          <div className="text-2xl font-bolder">Some of our top clients</div>
          <p className="text-sm">The eateries that are connected with us</p>
        </div>
      </div>
      {/* h-full w-full relative flex justify-center space-x-3xl */}
      <div className="flex items-center justify-center ">
        <Image
          src={burger}
          height={100}
          className="rounded-md m-xs"
          alt={"burgerhouse"}
        />
        <Image
          src={syanko}
          height={100}
          className="rounded-md m-xs"
          alt={"syanko"}
        />
      </div>
    </div>
  );
};
