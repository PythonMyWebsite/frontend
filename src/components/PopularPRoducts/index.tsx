"use client";

import FoodCard from "@/components/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { useEffect } from "react";
import { getAllProduct } from "@/lib/features/product/productSlice";

function PopularProducts() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-bold text-4xl">Popular Products</h1>
      <h2 className="text-center max-w-3xl">
        Các sản phẩm phổ biến: Khám phá danh sách các sản phẩm được yêu thích và
        phổ biến nhất trong cửa hàng của chúng tôi.
      </h2>
      <div className="flex gap-2 flex-wrap mt-7 justify-between">
        {products.map((product) => (
          <FoodCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
