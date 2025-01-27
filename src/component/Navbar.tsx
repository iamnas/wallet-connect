import  { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle Dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Change Language
  const changeLanguage = (lang:string) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false); // Close dropdown after selecting a language
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      {/* Left Section - Logo or Name */}
      <div className="text-lg font-bold">MyApp</div>

      {/* Middle Section - Buttons */}
      <div className="flex space-x-6">
        <button className="hover:bg-gray-800 px-4 py-2 rounded">{t('EXPLORE')}</button>
        <button className="hover:bg-gray-800 px-4 py-2 rounded">{t('OFFERS')}</button>
        <button className="hover:bg-gray-800 px-4 py-2 rounded">{t('HISTORY')}</button>
      </div>

      {/* Right Section - Language Dropdown */}
      <div className="relative">
        <button
          className="hover:bg-gray-800 px-4 py-2 rounded flex items-center"
          onClick={toggleDropdown}
        >
          {t('LANGUAGE')}
          <svg
            className="w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg z-10">
            <button
              className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
              onClick={() => changeLanguage('en')}
            >
              English
            </button>
            <button
              className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
              onClick={() => changeLanguage('es')}
            >
              Español
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
