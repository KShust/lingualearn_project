import React, { useState, useRef, useEffect } from 'react';
import { Search, Moon, Sun } from 'lucide-react';
import Authorization from '../Authorization/Authorization';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between relative"> {/* Added relative  */}
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white font-bold p-2 rounded-lg text-sm">LL</span>
          <span className="hidden sm:block font-bold text-gray-800 text-xl">LinguaLearn</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search - Desktop */}
        <div className="hidden md:flex relative w-64">
          <input
            type="text"
            placeholder="Search for words..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-200 w-full"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* Search - Mobile */}
        <div className="relative flex md:hidden" ref={searchRef}>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Search"
          >
            <Search className="w-6 h-6" />
          </button>

          {isSearchOpen && (
            <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for words..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-200 w-full"
                  autoFocus
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={toggleDarkMode}
          className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
          {isDarkMode ? (
            <Sun className="w-7 h-7 lg:w-6 lg:h-6 text-gray-400" />
          ) : (
            <Moon className="w-7 h-7 lg:w-6 lg:h-6 text-gray-400" />
          )}
        </button>
        <Authorization />
      </div>
    </header>
  );
}

export default Header;