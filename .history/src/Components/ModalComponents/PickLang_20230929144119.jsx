import { useState } from "react";

const PickLang = ({
  inputValueLang,
  setInputValueLang,
  inputValueCountry,
  setInputValueCountry,
}) => {
  //   const [selectedCountry, setSelectedCountry] = useState("");
  //  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setInputValueLang(event.target.value);
  };

  const handleCountryChange = (event) => {
    setInputValueCountry(event.target.value);
  };

  return (
    <div className="flex flex-col items-center pt-8">
      <h2 className="w-[375px] h-[65px] text-center  text-gray-600 text-[28px] font-bold font-['Montserrat'] mb-8">
        Pick your language and country/region
      </h2>

      <div className="mb-4 my-2">
        <select
          id="languageSelect"
          className="sm:w-[20rem] w-[70vw] px-3 py-2 border outline-none text-zinc-400 bg-neutral-100 rounded-lg"
          onChange={handleLanguageChange}
          value={inputValueLang}
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
          className="sm:w-[20rem] w-[70vw]  px-3 py-2 border outline-none text-zinc-400 bg-neutral-100 rounded-lg"
          onChange={handleCountryChange}
          value={inputValueCountry}
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
