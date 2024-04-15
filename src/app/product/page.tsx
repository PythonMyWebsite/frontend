"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProductFillter from "./components/ProductFillter";
import FoodCard from "@/components/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { useEffect } from "react";
import { getAllProduct } from "@/lib/features/product/productSlice";
import MoonLoader from "react-spinners/MoonLoader";
import { useTitle } from "@/lib/hooks";

function Product() {
  useTitle("Products");
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <div>
      <Header />
      <div className="mt-32 px-52 flex w-full mb-32 gap-4">
        <div className="w-1/4">
          <ProductFillter />
        </div>
        <div className="w-3/4 flex gap-1 flex-wrap justify-between">
          {products.length > 0 ? (
            products.map((product, index) => {
              return <FoodCard key={index} product={product} />;
            })
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <MoonLoader color="#36d7b7" size={70} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
