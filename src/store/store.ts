import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { homeReducers } from "./homeSlice";

const store = configureStore({
  reducer: {
    auth: authApi.reducer,
    home: homeReducers,
  },
});

export default store;
