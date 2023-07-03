import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = ({ children }) => {
  return <div className="bg-gray-900 bg-auto py-10">{children}</div>;
};
