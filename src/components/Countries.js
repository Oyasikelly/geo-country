/** @format */

export default function Countries({ navigateToResults, countries }) {
  return (
    <div className=" w-1/4">
      <CountryCard
        navigateToResults={navigateToResults}
        loadedCountry={countries}
      />
    </div>
  );
}

function CountryCard({ navigateToResults, loadedCountry }) {
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
      className="card bg-base-100 w-auto shadow-xl"
    >
      <figure>
        <img src={`${flags.png}`} alt="country flag" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name.common}</h2>
        <p>
          <span>Population:</span>
          <span>{population}</span>
        </p>
        <p>
          <span>Region:</span>
          <span>{region}</span>
        </p>
        <p>
          <span>Capital:</span>
          <span>{capital[0]}</span>
        </p>
      </div>
    </div>
  );
}
