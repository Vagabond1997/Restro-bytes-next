"use client";
import { Avatar, Card, Grid } from "@mantine/core";
import { IconFaceMask } from "@tabler/icons-react";

export const Testimonials = () => {
  const features = [
    {
      title: "Title",
      designation: "WordPress Developer",
      src: "https://images.pexels.com/photos/17362826/pexels-photo-17362826/free-photo-of-man-in-a-navy-blue-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: `
                    xercitationem
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                   `,
    },
    {
      title: "Title",
      designation: "UI-UX Designer",
      src: "https://images.pexels.com/photos/15754505/pexels-photo-15754505/free-photo-of-painted-smiling-man.jpeg",
      description: `
                    xercitationem
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                   `,
    },
    {
      title: "Title",
      designation: "Programmer @ DroitLab",
      src: "https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: `
                    xercitationem
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                    fugiat incidunt iste laboriosam maiores nemo nobis perferendis qui reiciendis rem repellat
                   `,
    },
  ];
  return (
    <div className="testimonals  container mx-auto pb-3xl pt-xl">
      <Grid className={"w-full justify-center mt-md"}>
        <Grid.Col
          md={8}
          sm={10}
          xs={12}
          px={"md"}
          className={"text-center flex flex-col justify-center"}
        >
          <div className="text-2xl font-bolder">What people say About Us</div>
          <p className="text-sm">
            Take a look at our satisfied clients to see what they say about us
          </p>
        </Grid.Col>
      </Grid>

      <Grid>
        {features.map((v: any, key: number) => (
          <Grid.Col md={4} sm={4} xs={12} key={key}>
            <Card className=" shadow-md">
              <div className="mr-2xl flex">
                <Avatar radius={"xl"} className="mr-md" src={v.src} />
                <div>
                  <div className="text-lg font-bold">{v.title}</div>
                  <div>{v.designation}</div>
                </div>
              </div>

              <p>{v.description}</p>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};
