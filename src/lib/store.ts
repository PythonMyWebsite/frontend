import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";
import cartSlice from "./features/cart/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [productSlice.reducerPath]: productSlice.reducer,
      [cartSlice.reducerPath]: cartSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
