"use client";
import { Grid } from "@mantine/core";
import Image from "next/image";
import ipad from "../../assets/img/ipad.png";

export const Services = () => {
  return (
    <section className={"wrapper-x pb-3xl pt-xl"}>
      <Grid className={"w-full justify-center mt-md"}>
        <Grid.Col
          md={8}
          sm={10}
          xs={12}
          px={"md"}
          className={"text-center flex flex-col justify-center"}
        >
          <div className=" font-bold  text-3xl">
            <label className="text-yellow-700">Digitize your restaurant</label>
          </div>
          <p className={""}>
            Managing your restuarant was never this easy. Make your management
            more smoother. Have restrobytes on your side see how the magic
            works.
          </p>
          <div className="w-full">
            <Image src={ipad} alt="" height={400} />
          </div>
        </Grid.Col>
      </Grid>
    </section>
  );
};
