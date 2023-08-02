"use client";
import { Button, Grid, Input } from "@mantine/core";
import Group76 from "../../assets/img/Group76.png";
import Image from "next/image";
import { useForm } from "@mantine/form";
import { Box, TextInput } from "@mantine/core";
import { Textarea } from "@mantine/core";

export const Message = () => {
  return (
    <section className={"wrapper-x pb-3xl pt-xl"}>
      <Grid>
        <Grid.Col md={6} sm={6} xs={12}>
          <div className="text-3xl font-extrabold">Send Us Message</div>
          <p className="text-sm mb-xl">
            Send us mesage to remain in contact with us
          </p>
          <Grid>
            <Grid.Col md={6} sm={6} xs={12}>
              <div>
                <Input.Wrapper label="Name">
                  <TextInput variant="filled" placeholder="Name" color="gray" />
                </Input.Wrapper>
              </div>
              <div>
                <Input.Wrapper label="Email">
                  <TextInput
                    variant="filled"
                    placeholder="Email"
                    color="gray"
                  />
                </Input.Wrapper>
              </div>
            </Grid.Col>

            <Grid.Col md={6} sm={6} xs={12}>
              <div>
                <Input.Wrapper label="Phone">
                  <TextInput
                    variant="filled"
                    placeholder="Phone"
                    color="gray"
                  />
                </Input.Wrapper>
              </div>
              <div>
                <Input.Wrapper label="Location">
                  <TextInput
                    variant="filled"
                    placeholder="Location"
                    color="gray"
                  />
                </Input.Wrapper>
              </div>
            </Grid.Col>
          </Grid>
          <div className="mt-xl text-xs">
            <Textarea
              variant="filled"
              placeholder="Message"
              label="Message"
              radius="xs"
              size="xl"
              withAsterisk
            />
            <div className="mt-xs">
              <Button radius="xs" color="yellow">
                Send
              </Button>
            </div>
          </div>
        </Grid.Col>

        <Grid.Col md={6} sm={6} xs={12}>
          <div className="h-full w-full relative flex justify-center items-end">
            <Image src={Group76} height={400} alt={"groupshop"} />
          </div>
        </Grid.Col>
      </Grid>
    </section>
  );
};
