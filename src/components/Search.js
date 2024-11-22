/** @format */

import React, { useState, useEffect } from "react";
import { useCountries } from "@/context/CountriesContext";

export const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function Search({ setLoading, setError, theme }) {
  const [region, setRegion] = useState("Africa");
  const { setCountries } = useCountries(); // Access setCountries from the context
  const [inputCountry, setInputCountry] = useState("");

  // useEffect(() => {
  async function fetchCountryRegions(region) {
    const apiUrl = `https://restcountries.com/v3.1/region/${region}`;

    setLoading(true);
    setError(null);
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
    } catch (err) {
      setError(err.message);
      // console.error("Error fetching country regions:", error);
    } finally {
      setLoading(false);
    }
  }
  // fetchCountryRegions(region);
  // }, [region, setCountries]);

  function handleRegion(region) {
    // setRegion(region);
    fetchCountryRegions(region);
  }
  function handleInput(e) {
    setInputCountry(() => e.target.value);
  }
  return (
    <div className="layout pt-[7rem] flex flex-row justify-between">
      <label
        className={`${
          theme ? "bg-gray-600 text-white" : "bg-white text-black"
        } input input-bordered flex items-center gap-2 shadow-md`}
      >
        <input
          type="text"
          className="grow"
          placeholder="Search for a country..."
          value={inputCountry}
          onChange={handleInput}
        />
      </label>
      <ul
        className={`${
          theme ? "bg-gray-600 text-white" : "bg-base-100 text-black"
        }  menu  xl:menu-horizontal rounded shadow-md h-auto`}
      >
        <li>
          <details close>
            <summary>Filter by Region</summary>
            <ul
              className={`${
                theme ? "bg-gray-600 text-white" : "bg-base-100 text-black"
              }  rounded w-full z-10`}
            >
              {REGIONS.map((region, index) => (
                <li
                  key={index}
                  // className={`${
                  //   theme
                  //     ? "bg-gray-800 text-white"
                  //     : "bg-white text-black"
                  // }`}
                >
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
