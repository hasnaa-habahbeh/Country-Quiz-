import { useState, useCallback } from "react";

export const useGetCountry = () => {
  const [countriesArray, setCountriesArray] = useState([]);
  const fetchCountry = useCallback(async () => {
    const res = await fetch("https://restcountries.com/v3/all");
    const data = await res.json();
    setCountriesArray(data);
  }, [setCountriesArray]);

  return [fetchCountry, countriesArray];
};
