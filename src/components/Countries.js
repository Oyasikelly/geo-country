/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
export default function Countries({
  theme,
  navigateToResults,
  countries,
  countryName,
}) {
  console.log(countries.length);

  return (
    <div className="relative h-screen overflow-scroll scrollbar-none w-full">
      <div
        className="
    absolute top-[30%] left-[50%]  transform -translate-x-[30%] -translate-y-1/2 
    bg-cover bg-no-repeat rounded-full animate-spinEarth 
    w-40 h-40   /* Default size for small screens */
    sm:w-48 sm:h-48 /* Medium size for small screens */
    md:w-64 md:h-64 /* Larger size for tablets */
    lg:w-80 lg:h-80 /* Larger size for desktops */
    xl:w-96 xl:h-96 /* Largest size for large desktops */
    mt-6
  "
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(128, 128, 128, 0.2), rgba(0, 0, 0, 0.5)), 
      url('/earth-texture.png')
    `,
        }}
      ></div>

      {/* Other content */}

      <p className=" w-auto text-gray-300 self-center text-center mt-1 pb-4 z-1">
        Search by Region, cca2, cca3, country name. Remember to click your
        desired country, in other to reveal country info.
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

  function handleNavigation(loadedCountry) {
    const clickedCountry = [loadedCountry].filter(
      (country) => country.name === name
    );
    navigateToResults(clickedCountry);
  }

  return (
    <motion.div
      onClick={() => handleNavigation(loadedCountry)}
      className={`${
        theme ? "bg-gray-600 text-white" : "bg-base-100 text-black"
      } card w-auto shadow-xl mx-auto mb-6 max-w-sm md:max-w-sm cursor-pointer transform transition-transform duration-300 hover:translate-y-4`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
    </motion.div>
  );
}
