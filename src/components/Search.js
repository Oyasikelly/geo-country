/** @format */

import React, { useState, useEffect } from "react";
import { useCountries } from "@/context/CountriesContext";

export const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function Search() {
  const [region, setRegion] = useState("N");
  const { setCountries } = useCountries(); // Access setCountries from the context
  const [inputCountry, setInputCountry] = useState();

  useEffect(() => {
    async function fetchCountryRegions(region) {
      const apiUrl = `https://restcountries.com/v3.1/region/${region}`;
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const countries = await response.json();
        const country = countries.filter(
          (country) =>
            country.altSpellings.includes(inputCountry) ||
            country.name.common === inputCountry
        );
        // console.log(countries);
        console.log(country);

        setCountries(country); // Save countries to the shared context
      } catch (error) {
        console.error("Error fetching country regions:", error);
      }
    }
    fetchCountryRegions(region);
  }, [region, setCountries]);

  function handleRegion(region) {
    setRegion(region);
  }
  function handleInput(e) {
    setInputCountry(() => e.target.value);
  }
  return (
    <div className="layout mt-[7rem] flex flex-row justify-between">
      <label className="input input-bordered flex items-center gap-2 shadow-md">
        <input
          type="text"
          className="grow"
          placeholder="Search for a country..."
          value={inputCountry}
          onChange={handleInput}
        />
      </label>
      <ul className="menu bg-white xl:menu-horizontal rounded shadow-md h-auto">
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
