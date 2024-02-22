"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";

interface StoreProviderI {
  children?: React.ReactNode;
}
const StoreProvider = (props: StoreProviderI) => {
  const { children } = props;

  return (
    <Provider store={store}>
      {/* <Toaster /> */}
      {children}
    </Provider>
  );
};

export default StoreProvider;
