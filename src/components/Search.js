/** @format */

import React, { useState, useEffect } from "react";
import { useCountries } from "@/context/CountriesContext";

export const REGIONS_SEMICASE = [
  "Africa",
  "America",
  "Asia",
  "Europe",
  "Oceania",
];
export const REGIONS_UPPERCASE = [
  "AFRICA",
  "AMERICA",
  "ASIA",
  "EUROPE",
  "OCEANIA",
];
export const REGIONS_LOWERCASE = [
  "africa",
  "america",
  "asia",
  "europe",
  "oceania",
];

export default function Search({
  setLoading,
  setError,
  theme,
  userInput,
  setUserInput,
  setCountryName,
}) {
  const { setCountries } = useCountries();

  async function fetchCountries(userInput) {
    let apiUrl = "";
    if (REGIONS_SEMICASE.includes(userInput)) {
      apiUrl =
        userInput !== "" &&
        `https://restcountries.com/v3.1/region/${userInput}`;
    } else if (REGIONS_SEMICASE.includes(userInput)) {
      apiUrl =
        userInput !== "" &&
        `https://restcountries.com/v3.1/region/${userInput}`;
    } else if (REGIONS_LOWERCASE.includes(userInput)) {
      apiUrl =
        userInput !== "" &&
        `https://restcountries.com/v3.1/region/${userInput}`;
    } else if (REGIONS_UPPERCASE.includes(userInput)) {
      apiUrl =
        userInput !== "" &&
        `https://restcountries.com/v3.1/region/${userInput}`;
    } else if (userInput.length === 3 && /[a-zA-Z]+$/.test(userInput)) {
      apiUrl =
        userInput !== "" && `https://restcountries.com/v3.1/alpha/${userInput}`;
    } else if (userInput.length === 2 && /[a-zA-Z]+$/.test(userInput)) {
      apiUrl =
        userInput !== "" && `https://restcountries.com/v3.1/alpha/${userInput}`;
    } else {
      apiUrl =
        userInput !== "" && `https://restcountries.com/v3.1/name/${userInput}`;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const countries = await response.json();
      // const country = countries.filter(
      //   (country) =>
      //     country.altSpellings.includes(userInput) ||
      //     country.name.common === userInput
      // );

      setCountries(countries);
    } catch (err) {
      setError("Invalid Search");
    } finally {
      setLoading(false);
    }
  }

  // function handleRegion(region) {
  //   fetchCountryRegions(region);
  // }

  function handleFetchCountry() {
    fetchCountries(userInput);
    setCountryName(userInput);
  }

  function handleInput(e) {
    setUserInput(() => e.target.value);
  }

  return (
    <div
      className="layout pt-24 pb-6 flex flex-col sm:flex-row 
                 sm:justify-between gap-4 px-4 sm:px-6 lg:px-8"
    >
      {/* Search Input */}
      <label
        className={`${
          theme ? "bg-gray-600 text-white" : "bg-white text-black"
        } input input-bordered flex items-center gap-2 shadow-md w-full sm:w-auto`}
      >
        <input
          type="text"
          className="grow bg-transparent outline-none"
          placeholder="Search for a country..."
          value={userInput}
          onChange={handleInput}
        />
      </label>

      {/* Region Filter */}
      <button
        onClick={() => handleFetchCountry(userInput)}
        className={`${
          theme ? "bg-gray-600 text-white" : "bg-white text-black"
        } btn shadow bg-white self-center lg:w-auto w-1/4`}
      >
        Search
      </button>
      {/* <ul
        className={`${
          theme ? "bg-gray-600 text-white" : "bg-base-100 text-black"
        } menu rounded shadow-md h-auto w-full sm:w-auto`}
      >
        <li>
          <details close>
            <summary className="cursor-pointer">Filter by Region</summary>
            <ul
              className={`${
                theme ? "bg-gray-600 text-white" : "bg-base-100 text-black"
              } rounded w-full z-10`}
            >
              {REGIONS.map((region, index) => (
                <li key={index}>
                  <a
                    className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                    onClick={() => handleRegion(region)}
                  >
                    {region}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul> */}
    </div>
  );
}
