"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { useEffect } from "react";
import { getAllCategory } from "@/lib/features/product/productSlice";

export default function ProductFillter() {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(
    (state: RootState) => state.product.categories
  );

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl">Product Category</h1>
      <div className="h-[1px] bg-gray-500 my-3"></div>
      <div className="mt-4">
        {categories.map((category, index) => (
          <div key={index}>
            <input type="checkbox" className="mr-2" />
            <label htmlFor="">{category.name}</label>
          </div>
        ))}
      </div>
      <h1 className="font-bold text-2xl mt-5">Filter By Price</h1>
      <div className="h-[1px] bg-gray-500 my-3"></div>
      <div>
        <input type="checkbox" className="mr-2" />
        <label htmlFor="">Duoi 200.000d</label>
      </div>
      <div className="mt-3">
        <input type="checkbox" className="mr-2" />
        <label htmlFor="">200.000 - 500.000d</label>
      </div>
      <div className="mt-3">
        <input type="checkbox" className="mr-2" />
        <label htmlFor="">500.000 1000.000d</label>
      </div>
      <div className="mt-3">
        <input type="checkbox" className="mr-2" />
        <label htmlFor="">Tren 1000.000d</label>
      </div>
    </div>
  );
}
