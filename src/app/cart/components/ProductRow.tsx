"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import {
  ICartItem,
  setQuantityCartItem,
  removeFromCart,
} from "@/lib/features/cart/cartSlice";

function ProductRow({ cartItem }: { cartItem: ICartItem }) {
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const increaseQuantity = () => {
    dispatch(setQuantityCartItem({ id: cartItem.id, quantity: quantity + 1 }));
    setQuantity(quantity + 1);
  };

  const descreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(
        setQuantityCartItem({ id: cartItem.id, quantity: quantity - 1 })
      );
      setQuantity(quantity - 1);
    }
  };

  const priceToal = () => {
    return quantity * cartItem.price;
  };

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch(setQuantityCartItem({ id: cartItem.id, quantity: newQuantity }));

    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
      dispatch(setQuantityCartItem({ id: cartItem.id, quantity: newQuantity }));
    }
  };

  const handleRemoveCartItem = () => {
    dispatch(removeFromCart(cartItem.id));
  };

  return (
    <tr className="hover:bg-gray-300">
      <td className="p-2">
        <Image
          alt=""
          src={cartItem.image_url}
          height={100}
          width={100}
          className="object-cover rounded-lg"
        />
      </td>
      <td>{cartItem.name}</td>
      <td className="">
        <div className="flex justify-center items-center h-full">
          <div className="flex">
            <Button
              className="font-bold p-2 text-3xl text-black"
              onClick={descreaseQuantity}
            >
              -
            </Button>
            <input
              type="text"
              value={`${quantity}`}
              className="w-10 text-center text-xl font-bold bg-slate-100 rounded-md"
              onChange={handleChangeQuantity}
            />
            <Button
              className="font-bold p-2 text-3xl text-black"
              onClick={increaseQuantity}
            >
              +
            </Button>
          </div>
        </div>
      </td>
      <td className="font-bold">{priceToal()} đ</td>
      <td>
        <Button
          className="bg-red-500 text-white p-3 hover:bg-red-600"
          onClick={handleRemoveCartItem}
        >
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
      </td>
    </tr>
  );
}

export default ProductRow;
