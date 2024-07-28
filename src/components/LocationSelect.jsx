import React, { useState } from 'react';

// Burada ölkələr JSON məlumatlarını daxil edin
const countries = [
  { "name": "United States", "code": "US" },
  { "name": "Canada", "code": "CA" },
  { "name": "United Kingdom", "code": "GB" },
  { "name": "Germany", "code": "DE" },
  { "name": "France", "code": "FR" },
  { "name": "Italy", "code": "IT" },
  { "name": "Japan", "code": "JP" },
  { "name": "Australia", "code": "AU" },
  { "name": "Brazil", "code": "BR" },
  { "name": "Argentina", "code": "AR" },
  { "name": "South Africa", "code": "ZA" },
  { "name": "Mexico", "code": "MX" },
  { "name": "India", "code": "IN" },
  { "name": "China", "code": "CN" },
  { "name": "Russia", "code": "RU" },
  { "name": "South Korea", "code": "KR" },
  { "name": "Spain", "code": "ES" },
  { "name": "Netherlands", "code": "NL" },
  { "name": "Sweden", "code": "SE" },
  { "name": "Norway", "code": "NO" },
  { "name": "Denmark", "code": "DK" },
  { "name": "Switzerland", "code": "CH" },
  { "name": "Belgium", "code": "BE" },
  { "name": "Austria", "code": "AT" },
  { "name": "Turkey", "code": "TR" },
  { "name": "Saudi Arabia", "code": "SA" },
  { "name": "United Arab Emirates", "code": "AE" },
  { "name": "Singapore", "code": "SG" },
  { "name": "Malaysia", "code": "MY" },
  { "name": "New Zealand", "code": "NZ" },
  { "name": "Egypt", "code": "EG" },
  { "name": "Nigeria", "code": "NG" },
  { "name": "Kenya", "code": "KE" },
  { "name": "Vietnam", "code": "VN" },
  { "name": "Thailand", "code": "TH" },
  { "name": "Philippines", "code": "PH" },
  { "name": "Pakistan", "code": "PK" },
  { "name": "Bangladesh", "code": "BD" },
  { "name": "Colombia", "code": "CO" },
  { "name": "Chile", "code": "CL" },
  { "name": "Peru", "code": "PE" },
  { "name": "Uruguay", "code": "UY" },
  { "name": "Paraguay", "code": "PY" },
  { "name": "Bolivia", "code": "BO" },
  { "name": "Ecuador", "code": "EC" },
  { "name": "Guatemala", "code": "GT" },
  { "name": "Honduras", "code": "HN" },
  { "name": "El Salvador", "code": "SV" },
  { "name": "Nicaragua", "code": "NI" },
  { "name": "Costa Rica", "code": "CR" },
  { "name": "Panama", "code": "PA" }
];

const LocationSelect = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="location_div">
      <h5>Location</h5>
      <select value={selectedCountry} onChange={handleChange}>
        <option value="">Jakarta/Indonesia</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelect;
