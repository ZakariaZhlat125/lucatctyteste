import React, { useState } from "react";

const PickLang = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <h2 className="w-[375.07px] h-[65.57px] text-center  text-gray-600 text-[28px] font-bold font-['Montserrat'] mb-8">
        Pick your language and country/region
      </h2>

      <div className="mb-4 my-2">
        <select
          id="languageSelect"
          className="w-full px-3 py-2 border outline-none text-zinc-400 bg-neutral-100 rounded-lg"
          onChange={handleLanguageChange}
          value={selectedLanguage}
        >
          <option value="">Select Language</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </select>
      </div>

      <div className="my-2">
        <select
          id="countrySelect"
          className="w-full px-3 py-2 border outline-none text-zinc-400 bg-neutral-100 rounded-lg"
          onChange={handleCountryChange}
          value={selectedCountry}
        >
          <option value="">Select Country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="france">France</option>
        </select>
      </div>
    </div>
  );
};

export default PickLang;
