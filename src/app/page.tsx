"use client";
;
import Header from "@/components/layout/Header";
import Banner from "../../public/bg-black.jpeg";
import FoodImg from "../../public/foods.jpeg";
import Image from "next/image";
import Button from "@mui/material/Button";
import PopularProduct from "./components/PopularProduct";
import IntroduceBanner from "./components/IntroduceBanner";
import SpecialOffers from "./components/SpecialOffers";
import Footer from "@/components/layout/Footer";
import { getAllProduct } from "@/lib/features/product/productSlice";
import { useTitle } from "@/lib/hooks";
import { useEffect } from "react";

export default function Home() {
  useTitle("Home");

  return (
    <main className="min-h-screen">
      <Header />
      {/* banner */}
      <div className="h-[550px] w-full bg-black relative">
        <Image
          src={Banner}
          className="w-full h-full  object-cover"
          alt="Banner"
        />
        <div className="absolute z-50 text-white top-1/2 -translate-y-1/2 ml-32">
          <h1>The best way to stuff your wallet.</h1>
          <h2 className="max-w-96 my-5">
            Discover the ultimate strategy to maximize your savings and
            financial gains.
          </h2>
          <Button className="bg-red-500 text-white">Shops Now</Button>
        </div>
        <Image
          alt="Food Image"
          src={FoodImg}
          width={300}
          height={300}
          className="rounded-tr-3xl rounded-tl-[30%] rounded-br-[30%] absolute right-1/3 top-1/2 -translate-y-1/2"
        />
      </div>
      {/* popular product */}
      <PopularProduct />

      {/* banner 2 */}
      <IntroduceBanner />

      {/* Special Offers */}
      <SpecialOffers />

      {/* footer */}
      <Footer />
    </main>
  );
}
