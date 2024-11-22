/** @format */

export default function BorderCountries({ theme2, children }) {
  return (
    <button
      className={`${
        theme2 ? "bg-gray-800 text-white" : "bg-white text-black"
      } text-gray-500 btn border-none ml-4`}
    >
      {children}
    </button>
  );
}
