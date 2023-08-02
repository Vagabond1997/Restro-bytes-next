"use client";
import { Grid } from "@mantine/core";
import screenshot from "../../assets/img/appscreens.png";
import Image from "next/image";

export const Screenshot = () => {
  return (
    <div className="w-full max-w-full py-xl">
      <div className="flex justify-center">
        <div className="w-3/7">
          <div className="text-4xl text-center font-bolder">App Screenshot</div>
          <p className="text-sm">
            Use our Restaurant Management Software to take your restaurant to
            the next level.
          </p>
        </div>
      </div>
      {/* h-full w-full relative flex justify-center space-x-3xl */}
      <div className="flex items-center justify-center ">
        <Image src={screenshot} height={300} alt={"shots"} />
      </div>
    </div>
  );
};

// className="rounded-md m-xs"
