/** @format */

import { useState } from "react";

export default function Countries({
  theme,
  navigateToResults,
  countries,
  countryName,
}) {
  console.log(countries.length);

  return (
    <div className="w-full">
      <p className="w-auto text-gray-300 self-center text-center mt-4 pb-4">
        Search country by Region, cca3, cca3, country name. Remember to click
        your desired country, in other to reveal the country info
      </p>
      {countries.length > 1 && (
        <p className="text-gray-500 pb-4">
          [{countries.length}] countries are in {}
          {countryName
            .trim()
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase())}
        </p>
      )}
      {countries.length === 1 && (
        <p className="text-gray-500 pb-4"> {countryName}</p>
      )}

      <div
        className={`grid items-center grid-cols-1 sm:grid-cols-1  w-auto px-4 ${
          countries.length > 1 ? `lg:grid-cols-4 gap-4` : ""
        }`}
      >
        {countries.map((country, index) => (
          <CountryCard
            navigateToResults={navigateToResults}
            loadedCountry={country}
            theme={theme}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

function CountryCard({ theme, navigateToResults, loadedCountry }) {
  const { flags, name, population, region, capital, continents } =
    loadedCountry;
  console.log(loadedCountry);

  function handleNavigation(loadedCountry) {
    const clickedCountry = new Array(loadedCountry).filter(
      (country) => country.name === name
    );
    navigateToResults(clickedCountry);
  }
  return (
    <div
      onClick={() => handleNavigation(loadedCountry)}
      className={`${
        theme ? "bg-gray-600 text-white" : "bg-base-100 text-black"
      } card w-auto shadow-xl mx-auto mb-6 max-w-sm md:max-w-sm cursor-pointer transform transition-transform duration-300 hover:translate-y-4`}
    >
      <figure className="overflow-hidden">
        <img
          src={`${Object.values(flags)[0]}`}
          alt="country flag"
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg md:text-xl">{name.common}</h2>
        <p className="text-sm md:text-base">
          <span>Population: </span>
          <span className="text-gray-400">{population.toLocaleString()}</span>
        </p>
        <p className="text-sm md:text-base">
          <span>Region: </span>
          <span className="text-gray-400">{region}</span>
        </p>
        <p className="text-sm md:text-base">
          <span>Continent: </span>
          <span className="text-gray-400">{continents[0]}</span>
        </p>
        <p className="text-sm md:text-base">
          <span>Capital: </span>
          <span className="text-gray-400">{capital ? capital[0] : "N/A"}</span>
        </p>
      </div>
    </div>
  );
}
