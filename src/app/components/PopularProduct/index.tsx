import ProductBanner from "../../../../public/product-banner.png";
import Image from "next/image";
import { Button } from "@mui/material";
import FoodCard from "@/components/FoodCard";
import { RootState, AppDispatch } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, CSSProperties, useState } from "react";
import {
  getAllProduct,
  getAllCategory,
} from "@/lib/features/product/productSlice";
import MoonLoader from "react-spinners/MoonLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function PopularProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product.products);
  const categories = useSelector(
    (state: RootState) => state.product.categories
  );
  const [activeCategory, setActiveCategory] = useState(0);

  const productsFiltered = () => {
    if (activeCategory === 0) {
      return products;
    }
    return products.filter((product) => product.category_id === activeCategory);
  };

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllCategory());
  }, []);

  return (
    <div className="mt-10 px-52">
      <h1 className="text-center font-bold text-4xl">Popular Products</h1>
      <h2 className="text-center  text-gray-400">
        Các sản phẩm phổ biến: Khám phá danh sách các sản phẩm được yêu thích và
        phổ biến nhất trong cửa hàng của chúng tôi.
      </h2>
      <div className="d-flex gap-2 mt-5">
        <div className="w-1/6">
          <div className="w-full">
            <Button
              className="d-flex w-full justify-between bg-gray-50 p-3 mb-1 cursor-pointer hover:bg-slate-50"
              onClick={() => setActiveCategory(0)}
            >
              <span>All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Button>
            {categories.map((category, index) => {
              return (
                <Button
                  key={index}
                  className="d-flex w-full justify-between bg-gray-50 p-3 mb-1 cursor-pointer hover:bg-slate-50"
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span>{category.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Button>
              );
            })}
          </div>
          <div className="relative">
            <Image
              alt="product banner"
              src={ProductBanner}
              className="w-full mt-3"
            />
            <div className="absolute top-1/4 left-7">
              <h1 className="text-3xl font-bold">Juicy</h1>
              <p className="text-2xl font-bold text-yellow-500">Fruits</p>
              <h3 className="text-xl mt-1 text-white">100% Natural</h3>
              <Button className="bg-red-500 mt-2 text-white ">Shop now</Button>
            </div>
          </div>
        </div>
        <div className="w-5/6 flex gap-2 flex-wrap">
          {products.length > 0 ? (
            productsFiltered().map((product, index) => {
              return <FoodCard key={index} product={product} />;
            })
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <MoonLoader color="#36d7b7" size={70} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PopularProduct;
