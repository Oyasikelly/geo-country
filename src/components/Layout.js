/** @format */
import React from "react";
import Header from "./Header";

export default function Layout({ theme, setTheme, children }) {
  return (
    <div>
      {/* Header */}
      <Header theme={theme} setTheme={setTheme} />

      {/* Main Content Area */}
      <main
        className="layout py-6 h-screen overflow-auto scrollbar-hide 
                   flex flex-col items-center px-4 sm:px-6"
      >
        {children}
      </main>
    </div>
  );
}
