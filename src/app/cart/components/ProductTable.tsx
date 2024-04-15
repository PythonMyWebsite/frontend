"use client";

import { Button } from "@mui/material";
import ProductRow from "./ProductRow";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";

function ProductTable() {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <div>
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-7 text-start pl-2">Product</th>
            <th className="py-7 text-start">Price</th>
            <th className="py-7 text-center">Quantity</th>
            <th className="py-7 text-start">Total</th>
            <th className="py-7 text-start">Action</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {cart.map((cartItem, index) => (
            <ProductRow key={index} cartItem={cartItem} />
          ))}
        </tbody>
      </table>
      <div className="mt-3 flex justify-end">
        <Link href={"/checkout"}>
          <Button className="text-white bg-red-500 hover:bg-red-600 p-3">
            Check out
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductTable;
