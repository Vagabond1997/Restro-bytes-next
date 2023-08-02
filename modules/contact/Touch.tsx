"use client";
import { Card, Grid, ThemeIcon } from "@mantine/core";
import Image from "next/image";
import Group114 from "../../assets/img/Group114.png";
import {
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

export const Touch = () => {
  const features = [
    {
      title: "Visit Us",
      icon: <AiOutlineEnvironment />,
      description: `
      Raut Complex, Tripureshwor
                   `,
    },
    {
      title: "Mail Us",
      icon: <AiOutlineMail />,
      description: `
      info@itglance.net
                    
                   `,
    },
    {
      title: "Call Us",
      icon: <AiOutlinePhone />,
      description: `
                     +977-014264984
                    
                   `,
    },
  ];
  return (
    <section className={"wrapper-x pb-3xl mt-xl pt-xl py-xl"}>
      <Grid className={"w-full justify-center mt-md"}>
        <Grid.Col
          md={8}
          sm={10}
          xs={12}
          px={"md"}
          className={"text-center flex flex-col justify-center"}
        >
          <div className=" font-bold  text-3xl">
            <label className="">Be in touch with us</label>
          </div>
          <div></div>
          <div className="w-full mt-lg">
            <Image src={Group114} alt="" height={400} />
          </div>
        </Grid.Col>
      </Grid>

      <Grid>
        {features.map((v: any, key: number) => (
          <Grid.Col md={4} sm={6} xs={12} key={key}>
            <Card className=" shadow-md bg-black mt-2xl ">
              <ThemeIcon radius="xs" size="lg" color="yellow">
                {v.icon}
              </ThemeIcon>
              <div className="text-lg font-bold pt-sm text-white">
                {v.title}
              </div>
              <p className="text-white">{v.description}</p>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </section>
  );
};
