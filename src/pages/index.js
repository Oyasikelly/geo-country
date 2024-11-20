/** @format */

import Layout from "@/components/Layout";
import Head from "next/head";
import Search from "@/components/Search";
import Countries from "@/components/Countries";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Geo Country</title>
      </Head>
      <Search />
      <Layout>
        <Countries />
      </Layout>
    </div>
  );
}
