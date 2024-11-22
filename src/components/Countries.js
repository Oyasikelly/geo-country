/** @format */

export default function Countries({ theme, navigateToResults, countries }) {
  return (
    <div className=" w-1/4">
      {countries && countries.length === 0 && (
        <p className="text-gray-300">Search country by region </p>
      )}
      {countries && countries.length !== 0 && (
        <CountryCard
          navigateToResults={navigateToResults}
          loadedCountry={countries}
          theme={theme}
        />
      )}
    </div>
  );
}

function CountryCard({ theme, navigateToResults, loadedCountry }) {
  // function navigateToResults() {
  //   router.push(`/result?countries=${loadedCountry}`); // Pass countries as a query parameter
  // }

  const [testCountry, notUsefull, ...others] = loadedCountry;
  console.log(loadedCountry);
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = testCountry;
  return (
    <div
      onClick={navigateToResults}
      className={`${
        theme ? "bg-gray-600 text-white" : "bg-base-100 text-black"
      } card w-auto shadow-xl`}
    >
      <figure>
        <img src={`${Object.values(flags)[0]}`} alt="country flag" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name.common}</h2>
        <p>
          <span>Population: </span>
          <span className="text-gray-400">{population}</span>
        </p>
        <p>
          <span>Region: </span>
          <span className="text-gray-400">{region}</span>
        </p>
        <p>
          <span>Capital: </span>
          <span className="text-gray-400">{capital[0]}</span>
        </p>
      </div>
    </div>
  );
}
