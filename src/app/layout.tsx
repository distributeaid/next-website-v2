import type { Metadata } from "next";

import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import { Yantramanav, Roboto, Permanent_Marker } from "next/font/google";
import "../stylesheets/main.css";

import NavBar from "../components/nav/navBar";
import Footer from "@/components/ui/Footer";
import GetInvolved from "@/components/ui/GetInvolved";

const yantramanav = Yantramanav({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-yantramanav",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});
const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-permanent-marker",
});

const title = "Distribute Aid — Your Mutual Aid Logistics Experts";
const description =
  "Distribute Aid connects donors with frontline aid organizations serving communities in need. Our logistics experts help deliver more aid more quickly and at lower costs.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: "/images/photos/photo-grc-moria-fire-relief.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${yantramanav.variable} ${roboto.variable} ${permanentMarker.variable}`}
      >
        <Theme accentColor="blue">
          <NavBar />
          <div className="pt-20">{children}</div>
          <GetInvolved />
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
