import type { Metadata } from "next";
import localFont from "next/font/local";

import Providers from "../components/Providers";
import Navigation from "@/components/Navigation";
import CardModal from "@/components/card/CardModal";

import "./globals.css";

export const metadata: Metadata = {
  title: "Tsubasa",
  description: "Tsubasa game application",
};

const newAirportDotFont = localFont({
  src: [
    {
      path: "../fonts/NewAirport/NewAirport-Dot1.otf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../fonts/NewAirport/NewAirport-Dot2.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../fonts/NewAirport/NewAirport-Dot3.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../fonts/NewAirport/NewAirport-Dot4.otf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../fonts/NewAirport/NewAirport-Dot5.otf",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-new-airport",
});

const agrandirFont = localFont({
  src: "../fonts/Agrandir/Agrandir-Heavy.woff2",
  variable: "--font-agrandir",
  weight: "700",
});

const ericaoneFont = localFont({
  src: [
    {
      path: "../fonts/EricaOne/EricaOne-Regular.ttf",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-erica-one",
});

const adieuFont = localFont({
  src: [
    {
      path: "../fonts/Adieu/Adieu-Regular.ttf",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-adieu",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden bg-green-400 text-white ${newAirportDotFont.variable} ${agrandirFont.variable} ${ericaoneFont.variable}`}
      >
        <Providers>
          <CardModal />
          {children}
          <div className="fixed bottom-0 z-20 flex w-full justify-center md:bottom-10 ">
            <Navigation />
          </div>
        </Providers>
      </body>
    </html>
  );
}
