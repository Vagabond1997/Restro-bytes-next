"use client";
import { Button, Grid } from "@mantine/core";
import mobile from "../../assets/img/Group76.png";
import Image from "next/image";
import { AiFillApple, AiOutlinePlayCircle } from "react-icons/ai";

export const MobileAppAdvertisement = () => {
  return (
    <div className="container mx-auto pb-3xl pt-xl">
      <Grid>
        <Grid.Col md={6} sm={6} xs={12}>
          <div className="h-full w-full relative flex justify-center items-end">
            <Image src={mobile} height={400} alt={"group76"} />
          </div>
        </Grid.Col>
        <Grid.Col md={6} sm={6} xs={12} py={"xl"} px={"2xl"}>
          <div className="text-2xl">Restrobytes in your </div>
          <div className="text-2xl">Pocket</div>
          <p className="text-sm w-[350px]">
            Restrobytes allows you to feel secure by separating the roles of
            different users work in your restaurant.
          </p>
          <div className="space-x-xl">
            <Button size="md" color="yellow">
              <AiOutlinePlayCircle
                size={30}
                className="text-black w-6 h-6 mr-2"
              />
              <div className="text-black ml-xs">
                <div className="text-sm">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </Button>
            <Button size="md" color="gray" variant="outline">
              <AiFillApple size={30} className="text-black w-6 h-6 mr-2" />
              <div className="text-black ml-xs">
                <div className="text-sm">Download on the </div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </Button>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};
