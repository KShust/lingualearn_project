import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, BookOpen, Heart, Gamepad, Settings, User, LogOut } from 'lucide-react';

export function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: BookOpen, label: "Dictionary", href: "/dictionary" },
    { icon: Heart, label: "Favorites", href: "/favorites" },
    { icon: Gamepad, label: "Mini Games", href: "/games" },
  ];

  return (
    <aside className="mt-1.5 h-[calc(100vh-6rem)] bg-gradient-to-b from-white to-gray-50 shadow-sm z-20 flex flex-col w-20 lg:w-56">
      <nav className="p-4 flex-1 space-y-2 justify-items-center lg:justify-items-start">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center space-x-1 lg:space-x-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg transition-all md:justify-center lg:justify-start ${
                isActive
                  ? "bg-yellow-50 text-yellow-600 font-nunito font-medium shadow-sm"
                  : "hover:bg-gray-100 hover:text-gray-900 text-gray-600"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  size={22}
                  className={`w-7 h-7 lg:w-6 lg:h-6 m-auto ${isActive ? "text-yellow-500" : "text-gray-400"}`} 
                />
                <span className="hidden lg:block ml-5">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 mt-auto border-t border-gray-100 justify-items-center lg:justify-items-start">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center space-x-2 lg:space-x-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg transition-all hover:bg-gray-100 hover:text-gray-900 text-gray-600"
          >
            <Settings className="w-6 h-6 md:w-7 md:h-7 text-gray-400 cursor-pointer m-auto" />
            <span className="hidden lg:block ml-5">Settings</span>
          </button>
          
          {isOpen && (
            <div className="absolute bottom-full left-0 mb-2 w-48 rounded-lg bg-white shadow-lg py-2 border border-gray-100">
              <button
                className="w-full flex items-center ml-2 space-x-3 px-4 py-2 hover:bg-gray-50 text-gray-700 cursor-pointer"
                onClick={() => {/* handle profile click */}}
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>
              <button
                className="w-full flex items-center ml-2 space-x-3 px-4 py-2 hover:bg-gray-50 text-gray-700 cursor-pointer"
                onClick={() => {/* handle logout click */}}
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;