/** @format */

import React from "react";
import BorderCountries from "./BorderCountries";

export const COUNTRY_INFO_COLUMN_ONE = [
  "Native Name",
  "Population",
  "Region",
  "Sub Region",
  "Capital",
];
export const COUNTRY_INFO_COLUMN_TWO = [
  "Top Level Domain",
  "Currenies",
  "Languages",
];
export default function ResultCountry() {
  return (
    <div className="hero  pb-[10rem]">
      <div className="hero-content gap-[6rem] flex-col lg:flex-row w-auto">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="w-1/2 rounded-lg shadow-2xl"
        />
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">X-Country</h1>
          <div className="py-6 flex justify-between">
            <ul>
              {COUNTRY_INFO_COLUMN_ONE.map((countryInfo, index) => (
                <li key={index}>
                  <span className="font-medium">{countryInfo}</span>
                  <span className="text-gray-500"> test {index + 1}</span>
                </li>
              ))}
            </ul>
            <ul>
              {COUNTRY_INFO_COLUMN_TWO.map((countryInfo, index) => (
                <li key={index}>
                  <span className="font-medium ">{countryInfo}</span>
                  <span className="text-gray-500"> test {8 - index}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Border Countries</span>
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
