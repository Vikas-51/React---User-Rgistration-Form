import React from 'react';

const PhoneInput = ({ countryCode, phoneNumber, onChangeCountryCode, onChangePhoneNumber, errors }) => {
  return (
    <fieldset className="mb-3" aria-labelledby="phone-label">
      <legend id="phone-label" className="form-label label">Phone Number *</legend>

      <div className="d-flex gap-2">
        <input
          type="text"
          name="phoneCountryCode"
          maxLength={5}
          value={countryCode}
          onChange={onChangeCountryCode}
          aria-invalid={errors.phoneCountryCode ? 'true' : 'false'}
          placeholder="+91"
          title="Country code e.g. +91"
          className={`form-control ${errors.phoneCountryCode ? 'is-invalid' : ''}`}
        />
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChangePhoneNumber}
          aria-invalid={errors.phoneNumber ? 'true' : 'false'}
          placeholder="Phone Number"
          className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
        />
      </div>
      {errors.phoneCountryCode && <div className="invalid-feedback">{errors.phoneCountryCode}</div>}
      {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
    </fieldset>
  );
};

export default PhoneInput;


