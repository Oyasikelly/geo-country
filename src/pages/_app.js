/** @format */

import "@/styles/globals.css";
import { CountriesProvider } from "@/context/CountriesContext";

export default function App({ Component, pageProps }) {
  return (
    <CountriesProvider>
      <Component {...pageProps} />
    </CountriesProvider>
  );
}
