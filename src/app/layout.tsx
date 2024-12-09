import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero"
import SingleProduct from "./SingleProduct/page";
import Product from "./Product/page";
import About from "./AboutUs/page"
import Cart from "./Cart/page"
import Contact from "./Contact/page"
import Faqs from "./Faqs/page"
import Shop from "./Shop/page"
import Footer from "./component/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comforty",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Hero/>
        <SingleProduct/>
        <Product/>
        <About/>
        <Cart/>
        <Contact/>
        <Faqs/>
        <Shop/>
        <Footer/>
        {children}</body>
    </html>
  );
}
