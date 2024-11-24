/** @format */

import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import ResultCountry from "@/components/ResultCountry";

export default function Result() {
  const router = useRouter();
  const { setTheme, theme, countryData } = router.query;

  // Parse country data from query parameters
  const parsedCountryData = countryData ? JSON.parse(countryData) : null;

  // Local state to manage theme
  const [theme2, setTheme2] = useState(theme);

  // Navigate back to the home page
  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div
      className={`${
        theme2 ? "bg-gray-800 text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      {/* Head Section */}
      <Head>
        <title>Geo Country - Result</title>
        <meta name="description" content="Detailed country information" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Layout Wrapper */}
      <Layout theme={theme2} setTheme={setTheme2}>
        {/* Back Button */}
        <button
          onClick={navigateToHome}
          className={`self-start lg:mt-20 mt-[3.5rem] flex items-center gap-2 px-4 py-2 rounded-md shadow-md${
            theme2
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M19 12H5"></path>
            <path d="M12 5l-7 7 7 7"></path>
          </svg>
          Back
        </button>

        {/* Result Country Details */}
        {parsedCountryData ? (
          <ResultCountry
            theme2={theme2}
            setTheme2={setTheme2}
            country={parsedCountryData}
          />
        ) : (
          <div className="flex justify-center items-center mt-20">
            <p className="text-lg font-medium">
              No country data available. Please go back and try again.
            </p>
          </div>
        )}
      </Layout>
    </div>
  );
}
