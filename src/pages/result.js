/** @format */

import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import ResultCountry from "@/components/ResultCountry";

export default function Result() {
  return (
    <div>
      <Head>
        <title>Geo Country</title>
      </Head>
      <Layout>
        <button className="mt-[4rem] bg-white btn btn-xs sm:btn-sm md:btn-md lg:btn-[0.5rem] shadow">
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
        <ResultCountry />
      </Layout>
    </div>
  );
}
