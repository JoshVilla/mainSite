import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
