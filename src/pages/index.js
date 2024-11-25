/** @format */

import Layout from "@/components/Layout";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Search from "@/components/Search";
import Countries from "@/components/Countries";
import { useCountries } from "@/context/CountriesContext";

export default function Home({ theme, setTheme }) {
  const { countries } = useCountries(); // Access countries from the context
  const router = useRouter();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [countryName, setCountryName] = useState("");

  function navigateToResults(country) {
    console.log(country);
    router.push({
      pathname: "/result",
      query: { setTheme, theme, countryData: JSON.stringify(country) },
    });
  }

  return (
    <div
      className={`${
        theme ? "bg-gray-800 text-white" : "bg-white text-black"
      } min-h-screen flex flex-col `}
    >
      {/* Head Section for Metadata */}
      <Head>
        <title>Geo Country</title>
        <meta name="description" content="Explore countries around the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Search Section */}
      <Search
        error={error}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
        theme={theme}
        userInput={userInput}
        setUserInput={setUserInput}
        setCountryName={setCountryName}
      />

      {/* Main Layout Section */}
      <Layout theme={theme} setTheme={setTheme}>
        {/* Conditional Rendering for Data State */}
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
        {!loading && !error && (
          <Countries
            countries={countries}
            navigateToResults={navigateToResults}
            theme={theme}
            countryName={countryName}
          />
        )}
      </Layout>
    </div>
  );
}
