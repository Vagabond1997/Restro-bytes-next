import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/providers";
import { Nav } from "../../modules/common/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RestroBytes",
  description: "Digitize your restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Nav /> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
