"use client";
import { SpotlightProvider } from "@mantine/spotlight";
import {
  AppShell,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { ReactNode, useState } from "react";
import { Nav } from "../../modules/common/Nav";
import { Footer } from "../../modules/common/Footer";

export const Providers = ({ children }: { children: ReactNode }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const [opened, setOpened] = useState(false);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          fontFamily: "Source Sans 3, sans-serif",
          spacing: {
            xs: "8px",
            sm: "16px",
            md: "24px",
            lg: "32px",
            xl: "40px",
          },
          colorScheme: colorScheme,
          colors: {
            dark: [
              "#d5d7e0",
              "#acaebf",
              "#8c8fa3",
              "#666980",
              "#4d4f66",
              "#34354a",
              "#2b2c3d",
              "#1d1e30",
              "#0c0d21",
              "#01010a",
            ],
            primary: [
              "#ececfa",
              "#9f9fe5",
              "#8c8cdf",
              "#7979da",
              "#6565d5",
              "#5252cf",
              "#3f3fca",
              "#3939b6",
              "#3939b6",
              "#3232a2",
            ],
            secondary: [
              "#fef4ed",
              "#fcc8a3",
              "#fbbc90",
              "#fbb17e",
              "#faa66b",
              "#fa9b59",
              "#f99046",
              "#faa66b",
              "#e0823f",
              "#c77338",
            ],
          },
          primaryColor: "primary",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ModalsProvider>
          {/*<SpotlightProvider>*/}
          <AppShell
            padding="md"
            header={<Nav opened={opened} setOpened={setOpened} />}
            styles={(theme: any) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
          >
            {children}
          </AppShell>
          <Footer />
          {/*</SpotlightProvider>*/}
        </ModalsProvider>
        {/* Notifications system */}
        <Notifications />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
