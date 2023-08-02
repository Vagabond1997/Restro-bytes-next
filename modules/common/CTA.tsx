"use client";
import { Button, Grid } from "@mantine/core";
import { BackgroundImage } from "@mantine/core";
import { useState } from "react";
import { Overlay, Image, AspectRatio } from "@mantine/core";

export const CTA = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div className="bg-yellow-500 py-2xl">
      <Grid className={"w-full justify-center mt-md"}>
        {/* <BackgroundImage
          src=""
          radius="xs"
        > */}
        <AspectRatio ratio={16 / 9} maw={400} mx="auto">
          <Image src="https://images.pexels.com/photos/5836773/pexels-photo-5836773.jpeg?auto=compress&cs=tinysrgb&w=600" />
          {visible && <Overlay color="#000" opacity={0.85} />}

          <Grid.Col
            md={8}
            sm={10}
            xs={12}
            px={"md"}
            className={"text-center flex flex-col justify-center"}
          >
            <div className="text-2xl font-bolder">
              Ready to improve your customer engagement?
            </div>
            <p>
              From quick order punching to reporting, our Restaurant POS takes
              care of everything
            </p>
            <div className="btn-area">
              <Button variant={"outline"} color="dark">
                Start For Free
              </Button>
              <Button color="dark" ml={"xs"}>
                Request a demo
              </Button>
            </div>
          </Grid.Col>
        </AspectRatio>
        {/* </BackgroundImage> */}
      </Grid>
    </div>
  );
};
