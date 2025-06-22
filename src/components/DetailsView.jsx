import React from 'react';
import countries from '../constants/countries';

const DetailsView = ({ data, onBack }) => {
  return (
    <div className="detailsContainer p-3" aria-label="Submitted Details">
      <h2 className="text-center">Submitted Details</h2>
      <dl className="row">
        <dt className="col-sm-4">First Name:</dt>
        <dd className="col-sm-8">{data.firstName}</dd>

        <dt className="col-sm-4">Last Name:</dt>
        <dd className="col-sm-8">{data.lastName}</dd>

        <dt className="col-sm-4">Username:</dt>
        <dd className="col-sm-8">{data.username}</dd>

        <dt className="col-sm-4">Email:</dt>
        <dd className="col-sm-8">{data.email}</dd>

        <dt className="col-sm-4">Phone Number:</dt>
        <dd className="col-sm-8">{data.phoneCountryCode} {data.phoneNumber}</dd>

        <dt className="col-sm-4">Country:</dt>
        <dd className="col-sm-8">{countries.find(c => c.countryCode === data.country)?.name || data.country}</dd>

        <dt className="col-sm-4">City:</dt>
        <dd className="col-sm-8">{data.city}</dd>

        <dt className="col-sm-4">PAN No.:</dt>
        <dd className="col-sm-8">{data.panNo.toUpperCase()}</dd>

        <dt className="col-sm-4">Aadhar No.:</dt>
        <dd className="col-sm-8">{data.aadharNo}</dd>
      </dl>
      <button className="btn btn-primary" type="button" onClick={onBack}>Fill Another Form</button>
    </div>
  );
};

export default DetailsView;
