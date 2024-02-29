import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "../styles/globals.css";

const merriweather = Merriweather({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
  style: ['normal',],
});

export const metadata: Metadata = {
  title: "Pause",
  description: "Created by Garry Shi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
