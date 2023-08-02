import {
  Burger,
  MediaQuery,
  Button,
  Header,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Logo } from "./Logo";
import Link from "next/link";

export const Nav = (props: any) => {
  const theme = useMantineTheme();
  return (
    <Header height={{ base: 60, md: 80 }} p="md">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Logo height={60} />

        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={props.opened}
            onClick={() => props.setOpened((o: boolean) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <MediaQuery
          smallerThan="sm"
          styles={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className={"flex items-center nav-items"}>
            <Link href={"/"} className="nav-item">
              Home
            </Link>
            <Link href={"/services"} className="nav-item">
              Services
            </Link>
            <Link href={"/"} className="nav-item">
              Pricing
            </Link>
            <Link href={"/support"} className="nav-item">
              Support
            </Link>
            <Link href={"/contact"} className="nav-item">
              Contact
            </Link>

            <Button color={"dark"}>Get Started</Button>
          </div>
        </MediaQuery>
      </div>
    </Header>
  );
};
