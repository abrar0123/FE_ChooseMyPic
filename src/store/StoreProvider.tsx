"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

interface StoreProviderI {
  children?: React.ReactNode;
}
const StoreProvider = (props: StoreProviderI) => {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
