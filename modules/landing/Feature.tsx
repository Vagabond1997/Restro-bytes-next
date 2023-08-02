"use client";

import { Card, Grid, ThemeIcon } from "@mantine/core";
import { IconFaceMask } from "@tabler/icons-react";
import male1 from "../../assets/img/male1.png";
import bell1 from "../../assets/img/bell1.png";
import admin1 from "../../assets/img/admin1.png";
import group from "../../assets/img/Group.png";
import dinner from "../../assets/img/dinner1.png";
import invoice from "../../assets/img/invoice1.png";

import Image from "next/image";

export const Feature = () => {
  const features = [
    {
      title: "ADMIN CONTROL",
      src: admin1,
      icon: <IconFaceMask />,
      description: `
                    xercitationem
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                   `,
    },
    {
      title: "WAITER CONVENIENCE",
      src: male1,
      icon: <IconFaceMask />,
      description: `
                    xercitationem
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                   `,
    },
    {
      title: "MENU MANAGEMENT",
      src: group,
      icon: <IconFaceMask />,
      description: `
                    xercitationem
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                   `,
    },
    {
      title: "KITCHEN ORDER TAKING",
      src: bell1,
      icon: <IconFaceMask />,
      description: `
                    xercitationem
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                   `,
    },
    {
      title: "BILLING",
      src: invoice,
      icon: <IconFaceMask />,
      description: `
                    xercitationem
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                   `,
    },
    {
      title: "TABLE MANAGEMENT",
      src: dinner,
      icon: <IconFaceMask />,
      description: `
                    xercitationem
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                   `,
    },
  ];
  return (
    <section className={"wrapper-x  pb-3xl  mt-xl py-3xl"}>
      <Grid className={"w-full justify-center mt-md"}>
        <Grid.Col
          md={8}
          sm={10}
          xs={12}
          px={"md"}
          className={"text-center flex flex-col justify-center"}
        >
          <div className="flex justify-center">
            <div className="text-4xl font-extrabold pr-sm">Perfect </div>
            <div className="text-4xl text-orange-400 font-extrabold">
              Restaurant App
            </div>
          </div>
          <p>
            Use our Restaurant Management Software to take your restaurant to
            the next level.
          </p>
        </Grid.Col>
      </Grid>
      <Grid>
        {features.map((v: any, key: number) => (
          <Grid.Col md={4} sm={6} xs={12} key={key}>
            <Card className=" shadow-md ">
              {/* <ThemeIcon radius="xs" size="lg" color="yellow">
                {v.icon}
              </ThemeIcon> */}
              <Image src={v.src} height={20} alt="test" />
              {/* {v.icon} */}
              <div className="text-lg font-bold pt-sm">{v.title}</div>
              <p>{v.description}</p>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </section>
  );
};
