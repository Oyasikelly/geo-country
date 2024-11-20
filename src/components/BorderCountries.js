/** @format */

import React, { Children } from "react";

export default function BorderCountries({ children }) {
  return (
    <button className="text-gray-500 btn bg-white border border-4 ml-4">
      {children}
    </button>
  );
}
