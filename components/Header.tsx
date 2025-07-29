import React, { useState } from 'react';
import { LogoutIcon, UserIcon } from './IconComponents';

interface HeaderProps {
  activeSection: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getTitle = () => {
      switch(activeSection) {
          case 'vpn': return 'VPN Client';
          case 'analytics': return 'Admin Analytics';
          default: return 'MzansiVPN';
      }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-[#131010] bg-opacity-80 backdrop-blur-sm sticky top-0 z-40">
      <h2 className="text-3xl font-bold text-white capitalize">{getTitle()}</h2>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-2 border-[#F4C2C2] flex items-center justify-center bg-[#2A2C2F]">
              <UserIcon className="w-6 h-6 text-gray-400" />
            </div>
          </button>
          {dropdownOpen && (
             <div className="absolute right-0 mt-2 w-48 bg-[#2A2C2F] border border-gray-700 rounded-lg shadow-lg z-50">
               <button onClick={onLogout} className="w-full flex items-center space-x-2 px-4 py-2 text-left text-gray-300 hover:bg-[#8A3324] hover:text-white transition-colors rounded-lg">
                <LogoutIcon className="w-5 h-5"/>
                <span>Logout</span>
               </button>
             </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
