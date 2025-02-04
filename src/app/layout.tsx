import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import "./index.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
export const metadata: Metadata = {
  title: "Quiz",
  description: "My implementation of Who want be millionaire",
};

export const viewport: Viewport = {
  themeColor: "#ee82ee",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${poppins.variable} antialiased`}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
