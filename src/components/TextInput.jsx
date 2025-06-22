import React from 'react';

const TextInput = ({ label, id, name, value, onChange, type = 'text', error, autoComplete }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label} *</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className={`form-control ${error ? 'is-invalid' : ''}`}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextInput;
