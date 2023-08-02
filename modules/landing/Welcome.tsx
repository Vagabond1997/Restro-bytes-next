"use client";
import { Grid } from "@mantine/core";
import Image from "next/image";
import ipad from "../../assets/img/ipad.png";
import { Button } from "@mantine/core";

export const Welcome = () => {
  return (
    <section className={"wrapper-x pb-3xl  mt-xl  pt-xl"}>
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
          <div>
            <Button
              color="yellow"
              size="md"
              className="transition shadow-lg shadow-amber-200 hover:shadow-amber-300 hover:shadow-md"
            >
              Start 90 day Trial
            </Button>
          </div>
          <div className="w-full mt-lg">
            <Image src={ipad} alt="" height={400} />
          </div>
        </Grid.Col>
      </Grid>
    </section>
  );
};
