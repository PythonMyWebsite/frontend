import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../product/productSlice";

export interface ICartItem extends IProduct {
  quantity: number;
}

const initialState: { cart: ICartItem[] } = {
  cart: (() => {
    try {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    } catch (error) {
      return [];
    }
  })(),
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItemIndex = state.cart.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
        state.cart[existingItemIndex].quantity += 1;
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng với số lượng là 1
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productIdToRemove);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setQuantityCartItem: (state, action) => {
      const { id, quantity } = action.payload;
      console.log("huuuuu", id, quantity);
      const itemToUpdate = state.cart.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart, setQuantityCartItem } =
  cartSlice.actions;

export default cartSlice;
