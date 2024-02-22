import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { homeReducers } from "./homeSlice";

const store = configureStore({
  reducer: {
    home: homeReducers,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware
    ),
});

export default store;
