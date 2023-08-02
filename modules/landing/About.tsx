"use client";
import { Button, Grid } from "@mantine/core";
import aunty from "../../assets/img/womanShop.png";
import Image from "next/image";

export const About = () => {
  return (
    <section className={"wrapper-x pb-3xl pt-xl"}>
      <Grid>
        <Grid.Col md={6} sm={6} xs={12}>
          <div className="h-full w-full relative flex justify-center items-end">
            <Image src={aunty} height={300} alt={"womanshop"} />
          </div>
        </Grid.Col>
        <Grid.Col md={6} sm={6} xs={12}>
          <div className="text-2xl">We are RestroBytes</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            cupiditate debitis fugiat harum molestias, quas vero? Ducimus est
            molestiae natus provident totam vitae. Enim impedit, maxime mollitia
            obcaecati temporibus voluptatibus.
          </p>
          <Button color="yellow">Know more</Button>
        </Grid.Col>
      </Grid>
    </section>
  );
};
