import React, { useState } from 'react';
import countries, { cities } from '../constants/countries';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectInput = ({ label, id, name, value, onChange, options, error }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label} *</label>
            <select 
                id={id} 
                name={name}
                value={value} 
                onChange={onChange} 
                className={`form-control ${error ? 'is-invalid' : ''}`}
            >
                <option value="">--Select a {label}--</option>
                {options.length > 0 ? (
                    options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))
                ) : (
                    <option enabled>No options available</option>
                )}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

const FormComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity("");
  };

  const filteredCities = cities[selectedCountry] || [];

  return (
    <form>
      <SelectInput
        label="Country"
        id="country"
        name="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        options={countries.map((country) => ({
          value: country.countryCode,
          label: country.name,
        }))}
      />

      {/* Only show city select if a country is selected */}
      {selectedCountry && (
        <SelectInput
          label="City"
          id="city"
          name="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          options={filteredCities.map((city) => ({
            value: city.name,
            label: city.name,
          }))}
        />
      )}
    </form>
  );
};


export default SelectInput;
export { FormComponent };
