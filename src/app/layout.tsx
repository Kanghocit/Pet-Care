import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Menu from "./components/menu";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "PetCare",
  description: "PetCare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
