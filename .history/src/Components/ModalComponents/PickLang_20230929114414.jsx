import React, { useState } from 'react';

const PickLang = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <h2 className="w-[375.07px] h-[65.57px] text-center text-gray-600 text-[28px] font-bold font-['Montserrat'] mb-4">Pick your language and country/region</h2>

      <div className="mb-4">
        {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="languageSelect">
          Select a Language:
        </label> */}
        <select
          id="languageSelect"
          className="w-full px-3 py-2 border rounded-lg"
          onChange={handleLanguageChange}
          value={selectedLanguage}
        >
          <option value="">Select Language</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          {/* Add more language options as needed */}
        </select>
      </div>

      <div>
        {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="countrySelect">
          Select a Country:
        </label> */}
        <select
          id="countrySelect"
          className="w-full px-3 py-2 border rounded-lg"
          onChange={handleCountryChange}
          value={selectedCountry}
        >
          <option value="">Select Country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="france">France</option>
          {/* Add more country options as needed */}
        </select>
      </div>

      {/* Display the selected language and country */}
      {selectedLanguage && selectedCountry && (
        <div className="mt-4">
          <p>Your selected language: {selectedLanguage}</p>
          <p>Your selected country: {selectedCountry}</p>
        </div>
      )}
    </div>
  );
};

export default PickLang;
