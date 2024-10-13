"use client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import React, { FC, ReactNode } from "react";
import { api } from "../redux/api";
interface ReduxProviderProps {
  children: ReactNode;
}
const ReduxProvider: FC<ReduxProviderProps> = ({children}) => {
  return(
    <ApiProvider api={api}>{children}</ApiProvider>
  )
};

export default ReduxProvider;
