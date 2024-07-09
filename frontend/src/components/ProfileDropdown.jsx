import React, { useState } from 'react';
import profilepicture from '../assets/profilepicture.png'


export function ProfileDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <img class="bg-blue-400 rounded-full w-8 h-8 object-cover" src={profilepicture} alt=""  onClick={() => setDropdownOpen(!dropdownOpen)} />

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 dark:bg-gray-700">
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">name@flowbite.com</span>
          </div>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
            Dashboard
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
            Settings
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
            Earnings
          </a>
          <div className="border-t border-gray-100 dark:border-gray-600"></div>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
            Sign out
          </a>
        </div>
      )}
    </div>
  );
}
