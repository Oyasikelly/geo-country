/** @format */

import React, { useState } from "react";
import BorderCountries from "./BorderCountries";

export default function ResultCountry({ theme2, country }) {
  const [borderClicked, setBorderClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [neighbourCountry, setNeighbourCountry] = useState("N");

  async function fetchNeighbourCountry(name) {
    const apiUrl = `https://restcountries.com/v3.1/alpha/${name}`;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const neightbourcountry = await response.json();

      console.log(neightbourcountry);
      setNeighbourCountry(neightbourcountry);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  function handleBorders(borderName) {
    setBorderClicked(true);
    fetchNeighbourCountry(borderName);
    console.log("Border is Working!", borderName);
  }
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center py-6">
          <p className="text-lg font-medium animate-pulse">
            Loading Country Data...
          </p>
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center py-6">
          <p className="text-lg font-medium text-red-500">
            Error: {error}. Please try again.
          </p>
        </div>
      )}
      {!loading && !error && borderClicked && (
        <CountryFetched
          handleBorders={handleBorders}
          country={neighbourCountry}
          theme2={theme2}
        />
      )}

      {!borderClicked && (
        <CountryFetched
          handleBorders={handleBorders}
          country={country}
          theme2={theme2}
        />
      )}
    </>
  );
}

function CountryFetched({ country, handleBorders, theme2 }) {
  const [testCountry, notUsefull, ...others] = country;
  const {
    borders,
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = testCountry;
  return (
    <div
      className={`${
        theme2 ? "bg-gray-800 text-white" : "bg-white text-black"
      } hero pb-16 rounded`}
    >
      <div
        className="hero-content flex flex-col lg:flex-row gap-6 
               w-auto px-4 sm:px-6 lg:px-8 shadow-2xl sm:mt-10"
      >
        {/* Country Flag */}
        <img
          src={`${Object.values(flags)[0]}`}
          alt="country flag"
          className="w-full lg:w-1/2 rounded-lg shadow-2xl"
        />

        {/* Country Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl lg:text-3xl font-bold">{name.common}</h1>
          <div className="py-6 flex flex-col lg:flex-row gap-6">
            {/* First Column */}
            <ul>
              <li>
                <span className="font-medium mr-2">Native Name:</span>
                <span className="text-gray-500">
                  {Object.values(name.nativeName)[0]?.common}
                </span>
              </li>
              <li>
                <span className="font-medium mr-2">Population:</span>
                <span className="text-gray-500">{population}</span>
              </li>
              <li>
                <span className="font-medium mr-2">Region:</span>
                <span className="text-gray-500">{region}</span>
              </li>
              <li>
                <span className="font-medium mr-2">Sub Region:</span>
                <span className="text-gray-500">{subregion}</span>
              </li>
              <li>
                <span className="font-medium mr-2">Capital:</span>
                <span className="text-gray-500">{capital[0]}</span>
              </li>
            </ul>

            {/* Second Column */}
            <ul>
              <li>
                <span className="font-medium mr-2">Top Level Domain:</span>
                <span className="text-gray-500">{tld[0]}</span>
              </li>
              <li>
                <span className="font-medium mr-2">Currencies:</span>
                <span className="text-gray-500">
                  {Object.keys(currencies)[0]}
                </span>
              </li>
              <li>
                <span className="font-medium mr-2">Languages:</span>
                <span className="text-gray-500">
                  {Object.values(languages).join(", ")}
                </span>
              </li>
            </ul>
          </div>

          {/* Border Countries */}
          <div className="flex flex-col lg:flex-row items-start gap-4">
            <span className="font-medium">Border Countries:</span>
            <div className="flex flex-wrap gap-2">
              {borders.map((border, i) => (
                <BorderCountries
                  onHandleBorder={handleBorders}
                  key={i}
                  theme2={theme2}
                >
                  {border}
                </BorderCountries>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
