import React from 'react';

const PasswordInput = ({ label, id, name, value, onChange, show, toggleShow, error }) => {
  return (
    <div className="mb-3 position-relative">
      <label htmlFor={id} className="form-label">{label} *</label>
      <input
        id={id}
        name={name}
        type={show ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
      />
      <button
        type="button"
        onClick={toggleShow}
        className="btn btn-link position-absolute top-50 end-0 translate-middle-y pe-3"
        aria-label={show ? 'Hide password' : 'Show password'}
        tabIndex={0}
        style={{ zIndex: 10, color: '#6c757d' }}
      >
        {show ? (
          <i className="bi bi-eye-slash" />
        ) : (
          <i className="bi bi-eye" />
        )}
      </button>
      {error && (
        <div id={`${id}-error`} className="invalid-feedback" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
