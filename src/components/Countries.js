/** @format */

import React from "react";
import CountryCard from "./CountryCard";

export default function Countries({ navigateToResults, countries }) {
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-12  items-center justify-center">
      <CountryCard navigateToResults={navigateToResults} />
    </div>
  );
}
