import React from "react";
// shell for app and passing {children} that Home can be display
export const Layout = ({ children }) => {
  // h-screen
  return <div className="bg-gray-900 bg-auto py-10">{children}</div>;
};
