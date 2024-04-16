import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: '../../src/fonts/rexlia_rg.otf',
  display:'swap',
  style:'bold'
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davinxi",
  description: "Davinxi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}

