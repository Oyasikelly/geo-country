/** @format */
import React from "react";
import Header from "./Header";

export default function Layout({ theme, setTheme, children }) {
  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <main className="layout h-screen py-6 overflow-auto scrollbar-hide flex flex-col items-center ">
        {children}
      </main>
    </div>
  );
}
