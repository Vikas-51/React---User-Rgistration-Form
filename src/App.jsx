import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import countries from './constants/countries';
import { cities } from './constants/countries';
import TextInput from './components/TextInput';
import PasswordInput from './components/PasswordInput';
import PhoneInput from './components/PhoneInput';
import SelectInput from './components/SelectInput';
import DetailsView from './components/DetailsView';
import './style/styles.css';


//rafce shortcut command
export default function App() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneCountryCode: '+91',
    phoneNumber: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const currentCountry = countries.find(
    (c) => c.countryCode === formData.country
  );

  function validateField(name, value) {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First Name is required';
        return '';
      case 'lastName':
        if (!value.trim()) return 'Last Name is required';
        return '';
      case 'username':
        if (!value.trim()) return 'Username is required';
        if (value.length < 3) return 'Username must be at least 3 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Email is invalid';
        return '';
      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 6) return 'Password must be at least 6 characters';
        return '';
      case 'phoneCountryCode':
        if (!value.trim()) return 'Country code is required';
        if (!/^\+\d{1,4}$/.test(value.trim())) return 'Country code must be in format +123';
        return '';
      case 'phoneNumber':
        if (!value.trim()) return 'Phone number is required';
        if (!/^\d{6,15}$/.test(value.trim())) return 'Phone number must be 6 to 15 digits';
        return '';
      case 'country':
        if (!value) return 'Country is required';
        return '';
      case 'city':
        if (!value) return 'City is required';
        return '';
      case 'panNo':
        if (!value.trim()) return 'PAN No. is required';
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i.test(value.trim())) return 'PAN No. format invalid';
        return '';
      case 'aadharNo':
        if (!value.trim()) return 'Aadhar No. is required';
        if (!/^\d{12}$/.test(value.trim())) return 'Aadhar No. must be 12 digits';
        return '';
      default:
        return '';
    }
  }

  function validateAll() {
    const newErrors = {};
    for (const key in formData) {
      if (key === 'showPassword') continue;
      const errorMsg = validateField(key, formData[key]);
      if (errorMsg) newErrors[key] = errorMsg;
    }
    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));

    if (name === 'country') {
      setFormData(prev => ({ ...prev, city: '' }));
      setErrors(prev => ({ ...prev, city: 'City is required' }));
    }
  }

  function toggleShowPassword() {
    setFormData(prev => ({ ...prev, showPassword: !prev.showPassword }));
  }

  const isFormValid = () => {
    if (
      Object.values(formData).some(
        (val) => val === '' || val === null || (typeof val === 'string' && val.trim() === '')
      )
    ) return false;
    return Object.values(errors).every(err => err === '');
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateAll();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmittedData(formData);
      alert('Form submitted successfully!');
      // Clear form and errors after submission
      setFormData(initialFormData);
      setErrors({});
    }
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <h1 className="title">User Registration Form</h1>
              <form onSubmit={handleSubmit} noValidate>
                <TextInput
                  label="First Name"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  autoComplete="given-name"
                />
                <TextInput
                  label="Last Name"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  autoComplete="family-name"
                />
                <TextInput
                  label="Username"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  error={errors.username}
                  autoComplete="username"
                />
                <TextInput
                  label="E-mail"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                />
                <PasswordInput
                  label="Password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  show={formData.showPassword}
                  toggleShow={toggleShowPassword}
                  error={errors.password}
                  autoComplete="new-password"
                />
                <PhoneInput
                  countryCode={formData.phoneCountryCode}
                  phoneNumber={formData.phoneNumber}
                  onChangeCountryCode={(e) => {
                    const val = e.target.value;
                    if (/^\+\d{0,4}$/.test(val)) {
                      setFormData((prev) => ({
                        ...prev,
                        phoneCountryCode: val,
                      }));
                      setErrors((prev) => ({
                        ...prev,
                        phoneCountryCode: validateField(
                          "phoneCountryCode",
                          val
                        ),
                      }));
                    }
                  }}
                  onChangePhoneNumber={(e) => {
                    const val = e.target.value;
                    if (/^\d{0,15}$/.test(val)) {
                      setFormData((prev) => ({ ...prev, phoneNumber: val }));
                      setErrors((prev) => ({
                        ...prev,
                        phoneNumber: validateField("phoneNumber", val),
                      }));
                    }
                  }}
                  errors={{
                    phoneCountryCode: errors.phoneCountryCode,
                    phoneNumber: errors.phoneNumber,
                  }}
                />
                <SelectInput
                  label="Country"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  options={countries.map((c) => ({
                    value: c.countryCode,
                    label: c.name,
                  }))}
                  error={errors.country}
                />
                <SelectInput
                  label="City"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  options={
                    cities[formData.country]?.map((city) => ({
                      value: city.name,
                      label: city.name,
                    })) || []
                  }
                  disabled={!formData.country}
                  error={errors.city}
                />
                <TextInput
                  label="PAN No."
                  id="panNo"
                  name="panNo"
                  value={formData.panNo}
                  onChange={handleChange}
                  error={errors.panNo}
                />
                <TextInput
                  label="Aadhar No."
                  id="aadharNo"
                  name="aadharNo"
                  value={formData.aadharNo}
                  onChange={handleChange}
                  error={errors.aadharNo}
                />
                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`submitBtn ${
                    !isFormValid() ? "submitBtnDisabled" : ""
                  }`}
                >
                  Submit
                </button>
              </form>
            </div>
          }
        />
        <Route
          path="/details"
          element={
            <DetailsView
              data={submittedData}
              onBack={() => {
                setSubmittedData(null);
                setErrors({});
                setFormData(initialFormData);
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
}

