import React, { useState } from "react";
import countries, { cities } from "./countries";

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity(""); 
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const cityOptions = cities[selectedCountry] || [];

  return (
    <div>
      <label htmlFor="country">Country *</label>
      <select
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">--Select a Country--</option>
        {countries.map((country) => (
          <option key={country.countryCode} value={country.countryCode}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <>
          <label htmlFor="city">City *</label>
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">--Select a City--</option>
            {cityOptions.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default CountrySelect;
