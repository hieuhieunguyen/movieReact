import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung/slice";
import { quanLyPhimReducer } from "./quanLyPhim/slice";

export const rootReducer = combineReducers({
  quanLyNguoiDung: quanLyNguoiDungReducer,
  quanLyPhim: quanLyPhimReducer,
});
