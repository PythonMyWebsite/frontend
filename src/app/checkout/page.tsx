"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProductRow from "./components/ProductRow";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

export default function Checkout() {
  const { cart } = useSelector((state: RootState) => state.cart);

  const handleOrder = () => {
    toast.info("Chức năng đang được phát triển....");
  };

  return (
    <div>
      <Header />
      <div className="mx-52 mt-20 flex gap-3 mb-20">
        <div className="w-1/3">
          <div className="border-gray-200 border-[1px] rounded-2xl p-5">
            <h1 className="font-bold text-2xl">Summary</h1>
            <div className="flex justify-between mt-5">
              <p className="text-gray-500">Sub-Total</p>
              <p>200.000d</p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-gray-500">Delivery Charges</p>
              <p>200.000d</p>
            </div>
            <div className="w-full h-[1px] bg-gray-300 my-3"></div>
            <div className="flex justify-between mt-5">
              <p className="text-xl font-bold">Total Amout</p>
              <p className="text-xl font-bold">200.000d</p>
            </div>
            <div className="mt-5">
              {cart.map((product, index) => (
                <ProductRow
                  key={index}
                  image={product.image_url}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
            </div>
          </div>
          <div className="border-gray-200 border-[1px] rounded-2xl p-5 mt-5">
            <h1 className="font-bold text-2xl">Payment Method</h1>
            <p className="mt-3 text-gray-500">
              Please select the preferred payment method to use on this order.
            </p>
            <div className="mt-3">
              <input
                type="radio"
                name="payment-method"
                id="payment-method"
                className="mr-3"
                checked
              />
              <label htmlFor="payment-method" className="cursor-pointer">
                Thanh toan khi nhan hang
              </label>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div className="border-gray-200 border-[1px] rounded-2xl p-5">
            <h1 className="text-2xl font-bold mb-5">Billing Details</h1>
            <div className="flex gap-5">
              <div className="w-1/2 ">
                <p className="mb-3">FirstName*</p>
                <TextField label="FirstName" className="w-full" />
              </div>
              <div className="w-1/2">
                <p className="mb-3">LastName*</p>
                <TextField label="LastName" className="w-full" />
              </div>
            </div>
            <div className="w-full mt-6">
              <p className="mb-3">Address*</p>
              <TextField label="Address" className="w-full" />
            </div>
            <div className="w-full mt-6">
              <p className="mb-3">Phone*</p>
              <TextField label="Phone" className="w-full" />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button
              className="bg-red-500 text-white p-3 hover:bg-red-600"
              onClick={handleOrder}
            >
              Please order
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
