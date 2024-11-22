/** @format */

import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import ResultCountry from "@/components/ResultCountry";
// import { useCountries } from "@/context/CountriesContext";

export default function Result() {
  const router = useRouter();
  console.log(router.query);
  const { setTheme, theme, countryData } = router.query;
  const parsedCountryData = countryData ? JSON.parse(countryData) : null;
  const [theme2, setTheme2] = useState(theme);
  // const { countries } = useCountries(); // Access countries from the context

  // console.log(countries);
  console.log(parsedCountryData);
  console.log(theme);
  const navigateToHome = () => {
    router.push("/");
  };
  return (
    <div
      className={`${
        theme2 ? "bg-gray-800 text-white" : "bg-white text-black"
      } `}
    >
      <Head>
        <title>Geo Country</title>
      </Head>
      <Layout theme={theme2} setTheme={setTheme2}>
        <button
          onClick={navigateToHome}
          className={`${
            theme2 ? "bg-gray-800 text-white" : "bg-white text-black"
          } mt-[4rem] border-none btn btn-xs sm:btn-sm md:btn-md lg:btn-[0.5rem] shadow self-start`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M19 12H5"></path>
            <path d="M12 5l-7 7 7 7"></path>
          </svg>
          Back
        </button>

        {/* Display shared state */}
        <ResultCountry
          theme2={theme2}
          setTheme2={setTheme2}
          country={parsedCountryData}
        />
      </Layout>
    </div>
  );
}
