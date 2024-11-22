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

  function navigateToResults() {
    router.push({
      pathname: "/result",
      query: { setTheme, theme, countryData: JSON.stringify(countries) },
    });
  }

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div
      className={`${theme ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <Head>
        <title>Geo Country</title>
      </Head>
      <Search
        error={error}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
        theme={theme}
      />
      <Layout theme={theme} setTheme={setTheme}>
        {/* Pass countries to a child component */}
        {loading && <p>Loading Country...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <Countries
            countries={countries}
            navigateToResults={navigateToResults}
            theme={theme}
          />
        )}
      </Layout>
    </div>
  );
}
