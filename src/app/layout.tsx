import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "a.costudioindonesia",
  description: "a.costudioindonesia merupakan studio gambar yang menawarkan jasa konsep, desain dan estimasi bangunan yang kompeten dan berpengalaman.",
};
70
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <meta name="title" content="A.costudioindonesia" />
        <meta name="description" content="a.costudioindonesia merupakan studio gambar yang menawarkan jasa konsep, desain dan estimasi bangunan yang kompeten dan berpengalaman." />
        <meta  name="keywords" content="A.costudioindonesia | Jasa Desain dan Bangun Bangunan" />
        <meta name="author" content="a.costudioindonesia" />

        <meta property="og:site_name" content="A.costudioindonesia | Jasa Desain dan Bangun Bangunan" />
        <meta property="og:title" content="A.costudioindonesia" />
        <meta property="og:description" content="a.costudioindonesia merupakan studio gambar yang menawarkan jasa konsep, desain dan estimasi bangunan yang kompeten dan berpengalaman." />
        <meta name="google-site-verification" content="R2PQPE8eWdnnoah7pB9jkwBERnh5DWpeBqZS_pwV4xE" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
