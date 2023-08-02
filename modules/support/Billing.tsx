"use client";
import { Button, Grid } from "@mantine/core";
import Rectangle2 from "../../assets/img/Rectangle2.png";
import Image from "next/image";

export const Billing = () => {
  return (
    <section className={"wrapper-x pb-3xl pt-xl"}>
      <Grid>
        <Grid.Col md={6} sm={6} xs={12}>
          <div className="h-full w-full relative flex justify-center items-end">
            <Image src={Rectangle2} height={300} alt={"groupshop"} />
          </div>
        </Grid.Col>
        <Grid.Col md={6} sm={6} xs={12}>
          <div className="text-4xl font-extrabold">Billing and Accounting</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Grid.Col>
      </Grid>
    </section>
  );
};
