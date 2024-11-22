/** @format */

import "@/styles/globals.css";
import { CountriesProvider } from "@/context/CountriesContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useState, useEffect } from "react";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ErrorBoundary>
      <CountriesProvider>
        <Component {...pageProps} theme={theme} setTheme={setTheme} />
      </CountriesProvider>
    </ErrorBoundary>
  );
}
