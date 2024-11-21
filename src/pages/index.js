/** @format */

import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import Search from "@/components/Search";
import Countries from "@/components/Countries";
import { useCountries } from "@/context/CountriesContext";

export default function Home() {
  const { countries } = useCountries(); // Access countries from the context

  const router = useRouter();

  function navigateToResults() {
    router.push(`/result?countries=${countries}`); // Pass countries as a query parameter
  }

  return (
    <div>
      <Head>
        <title>Geo Country</title>
      </Head>
      <Search />
      <Layout>
        {/* Pass countries to a child component */}
        <Countries
          countries={countries}
          navigateToResults={navigateToResults}
        />
      </Layout>
    </div>
  );
}
