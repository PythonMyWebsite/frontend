import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import apiBaseUrl from "@/lib/constant/baseUrl";
import { toast } from "react-toastify";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  desc: string;
  create_at: string;
  update_at: string;
  category_id: number;
  image_url: string;
}

export interface ICategory {
  id: number;
  name: string;
  url_img: string;
}

const initialState: { products: IProduct[]; categories: ICategory[] } = {
  products: [],
  categories: [],
};

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/product`);
      console.log("chau", response);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getAllCategory = createAsyncThunk(
  "product/getAllCategory",
  async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/category`);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  initialState,
  name: "product",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.products = action.payload.data;
    });
    builder.addCase(getAllProduct.pending, (state, action) => {});
    builder.addCase(getAllProduct.rejected, (state, action) => {
      toast(action.error.message, { type: "error", theme: "colored" });
    });
    // category
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.categories = action.payload.data;
    });
    builder.addCase(getAllCategory.pending, (state, action) => {});
    builder.addCase(getAllCategory.rejected, (state, action) => {
      toast(action.error.message, { type: "error", theme: "colored" });
    });
  },
});

export default productSlice;
