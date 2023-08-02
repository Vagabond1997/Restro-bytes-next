"use client";
import { Avatar, Card, Grid } from "@mantine/core";
import { AiOutlineEnvironment } from "react-icons/ai";
import { IoEllipseSharp } from "react-icons/io";

export const WhyChooseUs = () => {
  const whys = [
    {
      title: "Reason1",
      description:
        "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea nisi quidem vitae blanditiis! Blanditiis non illo ducimus ipsa laudantium, veniam qui nisi. Ut alias saepe perspiciatis nulla maxime temporibus.",
      icon: <AiOutlineEnvironment />,
    },

    {
      title: "Reason2",
      description:
        "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea nisi quidem vitae blanditiis! Blanditiis non illo ducimus ipsa laudantium, veniam qui nisi. Ut alias saepe perspiciatis nulla maxime temporibus.",
      icon: <AiOutlineEnvironment />,
    },

    {
      title: "Reason3",
      description:
        "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea nisi quidem vitae blanditiis! Blanditiis non illo ducimus ipsa laudantium, veniam qui nisi. Ut alias saepe perspiciatis nulla maxime temporibus.",
      icon: <AiOutlineEnvironment />,
    },
  ];
  return (
    <section className="wrapper-x py-2xl">
      <div className="text-center">
        <div className="text-4xl font-extrabold text-gray-600">
          Get the best for your restaurant.
        </div>
        <p className="w-9xl">
          Serve the finest dining with RestroBytes. Ensure accurancy, efficiency
          and dilligence in your service.RestroBytes ! Digitize your restaurant.
        </p>
      </div>

      <div className="text-center font-extrabold text-4xl py-lg">
        Why to choose us?
      </div>
      <Grid>
        {whys.map((v: any, key: number) => (
          <Grid.Col md={4} sm={4} xs={12} key={key}>
            <Card shadow="md" radius={"md"}>
              <Grid>
                <Grid.Col md={12} sm={3} xs={3} py={"md"}>
                  <div className="card-img flex justify-center">
                    {/* <IoEllipse /> */}
                    <Avatar size={64}></Avatar>
                  </div>
                </Grid.Col>
                <Grid.Col md={12} sm={8} xs={8}>
                  <div className="card-content text-center">
                    <div className="font-bold py-md">{v.title}</div>
                    <div className="py-md text-xs">{v.description}</div>
                  </div>
                </Grid.Col>
              </Grid>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </section>
  );
};
