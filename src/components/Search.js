/** @format */

import React, { useState } from "react";
import { useEffect } from "react";

export const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];
export default function Search({ setRegionFetched }) {
  const [region, setRegion] = useState("Africa");
  // const [fetchCountryRegion, setFetchCountryRegion] = useState([]);

  useEffect(() => {
    async function fetchCountryRegions(region) {
      const apiUrl = `https://restcountries.com/v3.1/region/${region}`;

      try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const countries = await response.json();
        console.log(countries);
        // setRegionFetched(() => countries);
        // Extract unique regions from the data
        // const regions = [
        //   ...new Set(countries.map((country) => country.region)),
        // ].filter(Boolean);

        // console.log("Regions:", regions); // Output the regions

        return countries;
      } catch (error) {
        console.error("Error fetching country regions:", error);
      }
      // Call the function
    }
    fetchCountryRegions(region);
  }, [region]);

  function handleRegion(region) {
    console.log(region);
    setRegion(region);
    // setFetchCountryRegion(() => (region ? region : null));
    // console.log(fetchCountryRegion);
  }
  return (
    <div className=" layout mt-[7rem]  flex flex flex-row  justify-between">
      <label className="input input-bordered flex items-center gap-2 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          className="grow"
          placeholder="Search for a country..."
        />
      </label>
      <ul className="menu bg-white xl:menu-horizontal rounded   shadow-md h-auto">
        <li>
          <details open>
            <summary>Filter by Region</summary>
            <ul className="rounded w-full z-1">
              {REGIONS.map((region, index) => (
                <li key={index}>
                  <a onClick={() => handleRegion(region)}>{region}</a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
