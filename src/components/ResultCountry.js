/** @format */

import React, { useState } from "react";
import BorderCountries from "./BorderCountries";

export default function ResultCountry({ country }) {
  const [searchedCont, setSearchedCont] = useState();
  const [testCountry, notUsefull, ...others] = country;
  console.log(testCountry);
  const {
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
  //   name.nativeName.eng.common,
  //   population,
  //   region,
  //   subregion,
  //   capital[0],
  //   tld[0],
  //   currencies,
  //   languages.eng
  // );

  return (
    <div className="hero  pb-[10rem]">
      <div className="hero-content gap-[6rem] flex-col lg:flex-row w-auto">
        <img
          src={`${flags.png}`}
          alt="Shoes"
          className="w-1/2 rounded-lg shadow-2xl"
        />
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">{name.common}</h1>
          <div className="py-6 flex justify-between">
            <ul>
              <li>
                <span className="font-medium mr-2">Native Name:</span>
                <span className="text-gray-500">
                  {name.nativeName.eng.common}
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
                <span className="text-gray-500">{languages.eng}</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Border Countries:</span>
            <div>
              <BorderCountries>country1</BorderCountries>
              <BorderCountries>country2</BorderCountries>
              <BorderCountries>country3</BorderCountries>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
