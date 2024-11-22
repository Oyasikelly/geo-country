/** @format */
import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="layout py-10 overflow-auto scrollbar-hide flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
