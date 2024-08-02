import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "A.COSTUDIO",
  description: "",
};
70
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
