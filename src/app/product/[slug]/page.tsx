import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import OliuImg from "../../../../public/oliu.jpeg";
import { Button } from "@mui/material";
import PopularProduct from "@/components/PopularPRoducts";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Header />
      <div className="mx-52 mt-32">
        <div className="w-full flex  gap-5">
          <div className="w-1/2">
            <Image alt="" src={OliuImg} />
          </div>
          <div className="w-1/2">
            <h1 className="font-bold text-2xl">
              Seeds Of Change Oraganic Quinoa, Brown
            </h1>
            <p className="mt-5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
              minus error doloribus saepe natus?
            </p>
            <div className="flex mt-5 items-center">
              <p className="text-xl font-bold">Weight :</p>
              <p className="text-gray-500 ml-10">200 Grams</p>
            </div>
            <div className="flex mt-5 items-center">
              <p className="text-xl font-bold">Weight :</p>
              <p className="text-gray-500 ml-10">200 Grams</p>
            </div>
            <div className="flex mt-5 items-center">
              <p className="text-xl font-bold">Weight :</p>
              <p className="text-gray-500 ml-10">200 Grams</p>
            </div>
            <div className="flex mt-5 items-center">
              <p className="text-xl font-bold">Weight :</p>
              <p className="text-gray-500 ml-10">200 Grams</p>
            </div>

            <p className="text-red-600 font-bold text-xl mt-10">200.000d</p>
            <Button className="p-5 bg-red-600 text-white hover:bg-red-500 mt-5">
              Add to cart
            </Button>
          </div>
        </div>
        <div className="mt-10"></div>
        <PopularProduct />
      </div>
      <Footer />
    </div>
  );
}
