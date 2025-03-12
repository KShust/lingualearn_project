import React, {useState, useRef, useEffect} from 'react'
import { User, LogIn, UserPlus } from 'lucide-react';

function Authorization() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAuthOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
    <div className="flex items-center space-x-2">
          <div className="hidden lg:flex items-center space-x-2">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
              Sign Up
            </button>
          </div>

          <div className="flex lg:hidden items-center space-x-2">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsAuthOpen(!isAuthOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Authentication menu"
              >
                <User className="w-7 h-7 lg:w-6 lg:h-6  text-gray-400" />
              </button>

              {isAuthOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg py-2 border border-gray-100">
                  <button
                    className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 text-gray-700 cursor-pointer">
                    <LogIn className="w-7 h-7 lg:w-6 lg:h-6" />
                    <span>Sign In</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 text-gray-700 cursor-pointer">
                    <UserPlus className="w-7 h-7 lg:w-6 lg:h-6" />
                    <span>Sign Up</span>
                  </button>
                </div>
              )}
            </div>
          </div> 
        </div>         
    </>
  )
}

export default Authorization