"use client";
import { Grid } from "@mantine/core";
import sideimage from "../../assets/img/sideimage.png";
import Image from "next/image";
// text-3xl mt-[5rem]

export const Restro = () => {
  return (
    <section className={"wrapper-x pb-3xl pt-xl mt-3xl"}>
      <Grid className="">
        <Grid.Col md={6} sm={6} xs={12}>
          <div className="text-6xl ">We are </div>
          <div className="text-6xl text-orange-400">RestroBytes</div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            cupiditate debitis fugiat harum molestias, quas vero? Ducimus est
            molestiae natus provident totam vitae. Enim impedit, maxime mollitia
            obcaecati temporibus voluptatibus. cupiditate debitis fugiat harum
            molestias, quas vero? Ducimus est molestiae natus provident totam
            vitae. Enim impedit, maxime mollitia obcaecati temporibus
            voluptatibus.
          </p>
        </Grid.Col>
        <Grid.Col md={6} sm={6} xs={12}>
          <div className="h-full w-full  max-w-full  relative flex justify-center pl-3xl">
            <Image src={sideimage} height={500} alt={"sideimage"} />
          </div>
        </Grid.Col>
      </Grid>
    </section>
  );
};
