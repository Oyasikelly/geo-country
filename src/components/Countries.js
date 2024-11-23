/** @format */

export default function Countries({ theme, navigateToResults, countries }) {
  return (
    <div className="w-full lg:w-1/4 px-4">
      {countries && countries.length === 0 && (
        <p className="text-gray-300 text-center mt-4">
          Search country by region
        </p>
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
  const [testCountry] = loadedCountry;

  const { flags, name, population, region, capital } = testCountry;
  console.log(loadedCountry);
  return (
    <div
      onClick={navigateToResults}
      className={`${
        theme ? "bg-gray-600 text-white" : "bg-base-100 text-black"
      } card w-full shadow-xl mx-auto mb-6 max-w-sm md:max-w-md`}
    >
      <figure className="overflow-hidden">
        <img
          src={`${Object.values(flags)[0]}`}
          alt="country flag"
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg md:text-xl">{name.common}</h2>
        <p className="text-sm md:text-base">
          <span>Population: </span>
          <span className="text-gray-400">{population.toLocaleString()}</span>
        </p>
        <p className="text-sm md:text-base">
          <span>Region: </span>
          <span className="text-gray-400">{region}</span>
        </p>
        <p className="text-sm md:text-base">
          <span>Capital: </span>
          <span className="text-gray-400">{capital ? capital[0] : "N/A"}</span>
        </p>
      </div>
    </div>
  );
}
