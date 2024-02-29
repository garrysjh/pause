import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"

const merriweather = Merriweather({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
  style: ['normal',],
});

export const metadata: Metadata = {
  title: "Garry",
  description: "Pause, Created by Garry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}><ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
