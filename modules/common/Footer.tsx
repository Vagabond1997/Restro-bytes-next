// import { createStyles, Text, Container, ActionIcon, Group, rem } from '@mantine/core';
// import { IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';
// import {Logo} from "./Logo";

// const useStyles = createStyles((theme) => ({
//     footer: {
//         // marginTop: rem(120),
//         paddingTop: `calc(${theme.spacing.xl} * 2)`,
//         paddingBottom: `calc(${theme.spacing.xl} * 2)`,
//         backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
//         borderTop: `${rem(1)} solid ${
//             theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
//         }`,
//     },

//     logo: {
//         maxWidth: rem(200),

//         [theme.fn.smallerThan('sm')]: {
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//         },
//     },

//     description: {
//         marginTop: rem(5),

//         [theme.fn.smallerThan('sm')]: {
//             marginTop: theme.spacing.xs,
//             textAlign: 'center',
//         },
//     },

//     inner: {
//         display: 'flex',
//         justifyContent: 'space-between',

//         [theme.fn.smallerThan('sm')]: {
//             flexDirection: 'column',
//             alignItems: 'center',
//         },
//     },

//     groups: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         [theme.fn.smallerThan('sm')]: {
//             display: 'none',
//         },
//     },

//     wrapper: {
//         width: rem(160),
//     },

//     link: {
//         display: 'block',
//         color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
//         fontSize: theme.fontSizes.sm,
//         paddingTop: rem(3),
//         paddingBottom: rem(3),

//         '&:hover': {
//             textDecoration: 'underline',
//         },
//     },

//     title: {
//         fontSize: theme.fontSizes.lg,
//         fontWeight: 700,
//         fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//         marginBottom: `calc(${theme.spacing.xs} / 2)`,
//         color: theme.colorScheme === 'dark' ? theme.white : theme.black,
//     },

//     afterFooter: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginTop: theme.spacing.xl,
//         paddingTop: theme.spacing.xl,
//         paddingBottom: theme.spacing.xl,
//         borderTop: `${rem(1)} solid ${
//             theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
//         }`,

//         [theme.fn.smallerThan('sm')]: {
//             flexDirection: 'column',
//         },
//     },
//     social: {
//         [theme.fn.smallerThan('sm')]: {
//             marginTop: theme.spacing.xs,
//         },
//     },
// }));

// interface FooterLinksProps {
//     data: {
//         title: string;
//         links: { label: string; link: string }[];
//     }[];
// }

// export function Footer({ data }: FooterLinksProps) {
//     const { classes } = useStyles();

//     const groups = data.map((group) => {
//         const links = group.links.map((link, index) => (
//             <Text<'a'>
//                 key={index}
//                 className={classes.link}
//                 component="a"
//                 href={link.link}
//                 onClick={(event) => event.preventDefault()}
//             >
//                 {link.label}
//             </Text>
//         ));

//         return (
//             <div className={classes.wrapper} key={group.title}>
//                 <Text className={classes.title}>{group.title}</Text>
//                 {links}
//             </div>
//         );
//     });

//     return (
//         <footer className={classes.footer}>
//             <Container className={classes.inner}>
//                 <div className={classes.logo}>
//                     <Logo size={100} />
//                     {/*<Text size="xs" color="dimmed" className={classes.description}>*/}
//                     {/*    Build fully functional accessible web applications faster than ever*/}
//                     {/*</Text>*/}
//                 </div>
//                 <div className={classes.groups}>{groups}</div>
//             </Container>
//             <Container className={classes.afterFooter}>
//                 <Text color="dimmed" size="sm">
//                     © 2023 RestroBytes. All rights reserved.
//                 </Text>

//                 <Group spacing={0} className={classes.social} position="right" noWrap>
//                     <ActionIcon component="a" target={'_blank'} size="lg" href={""}>
//                         <IconBrandFacebook size="1.05rem" stroke={1.5} />
//                     </ActionIcon>
//                     <ActionIcon component="a" target={'_blank'} size="lg" href={""}>
//                     <IconBrandInstagram size="1.05rem" stroke={1.5} />
//                     </ActionIcon>
//                     <ActionIcon component="a" target={'_blank'} size="lg" href={""}>
//                     <IconBrandLinkedin size="1.05rem" stroke={1.5} />
//                     </ActionIcon>
//                 </Group>
//             </Container>
//         </footer>
//     );
// }

"use client";
import { Avatar, ThemeIcon, Button, Grid } from "@mantine/core";
import logo from "../../assets/img/logo.png";
import Image from "next/image";
// import {
// IconBrandFacebook,
// IconBrandLinkedin,
// IconBrandInstagram,
// } from "@tabler/icons-react";
import {
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bg-black text-white wrapper-x max-w-full w-full h-full py-xl">
      <Grid className={"w-full justify-center mt-md"}>
        <Grid.Col md={4}>
          <div className="mb-lg">
            <Image src={logo} height={40} alt={"Logo"} />
          </div>
          {/* <IconBrandFacebook size="2.05rem" stroke={1.5} />
          <IconBrandInstagram size="2.05rem" stroke={1.5} />
          <IconBrandLinkedin size="2.05rem" stroke={1.5} /> */}
        </Grid.Col>
        <Grid.Col md={4}>
          <Grid>
            <Grid.Col md={3}>
              <div className="text-sm">About</div>
              <div className="text-sm">
                <p>Our team</p>
                <p>Our Story</p>
                <p>Our Client</p>
              </div>
            </Grid.Col>
            <Grid.Col md={3}>
              <div className="text-sm">Company</div>
              <div className="text-sm">
                <p>Client</p>
                <p>Our Services</p>
              </div>
            </Grid.Col>
            <Grid.Col md={3}>
              <div className="text-sm">Resource</div>
              <div className="text-sm">
                <p>Blog</p>
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col md={2}>
          <Grid>
            <Grid.Col md={8}>
              <div className="mb-md  flex">
                <ThemeIcon radius="xl" color="yellow">
                  <AiOutlineEnvironment />
                </ThemeIcon>
                <div className="px-md">Raut Complex</div>
                {/* <div>Tripureshwor,Kathmandu</div> */}
              </div>
              <div className="mb-md flex">
                <ThemeIcon radius="xl" color="yellow">
                  <AiOutlineMail />
                </ThemeIcon>
                <div className="px-md">itglance.net</div>
              </div>
              <div className="mb-md flex">
                <ThemeIcon radius="xl" color="yellow">
                  <AiOutlinePhone
                  // style={{
                  //   background: "orange",
                  //   borderRadius: "50%",
                  // }}
                  />
                </ThemeIcon>
                <div className="px-md">014264984</div>
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
      <div className="text-center py-xl">
        Copyright ©All Rights reserved @ restrobyte
      </div>
    </div>
  );
};
