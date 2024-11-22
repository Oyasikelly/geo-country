/** @format */

import React, { useState } from "react";
import BorderCountries from "./BorderCountries";

export default function ResultCountry({ theme2, country }) {
  const [testCountry, notUsefull, ...others] = country;
  console.log(testCountry);
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
  // console.log(
  //   Object.values(name.nativeName)[0]?.common,
  //   population,
  //   region,
  //   subregion,
  //   capital[0],
  //   tld[0],
  //   currencies,
  //   languages.eng
  // );
  return (
    <div
      className={`${
        theme2 ? "bg-gray-800 text-white" : "bg-white text-black"
      } hero  pb-[10rem] overflow-hidden`}
    >
      <div className="hero-content gap-[6rem] flex-col lg:flex-row w-auto">
        <img
          src={`${Object.values(flags)[0]}`}
          alt="country flag"
          className="w-1/2 rounded-lg shadow-2xl"
        />
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">{name.common}</h1>
          <div className="py-6 flex justify-between gap-10 w-full">
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
            <ul>
              <li>
                <span className="font-medium mr-2 ">Top Level Domain:</span>
                <span className="text-gray-500">{tld[0]}</span>
              </li>
              <li>
                <span className="font-medium mr-2">Currenies:</span>
                <span className="text-gray-500">
                  {Object.keys(currencies)[0]}
                </span>
              </li>
              <li>
                <span className="font-medium mr-2 ">Languages:</span>
                <span className="text-gray-500">
                  {Object.values(languages)
                    .map((entry) => entry)
                    .join(",")}
                  {/* {Object.keys(languages)[0]} */}
                </span>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Border Countries:</span>
            <div>
              {borders.map((border, i) => (
                <BorderCountries theme2={theme2}>{border}</BorderCountries>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
