import React from 'react';
import { GlobeAfricaIcon, ServerIcon, AnalyticsIcon, ShieldIcon } from './IconComponents';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isAdmin: boolean;
}

const NavItem: React.FC<{
  label: string;
  sectionName: string;
  activeSection: string;
  onClick: (section: string) => void;
  children: React.ReactNode;
}> = ({ label, sectionName, activeSection, onClick, children }) => (
  <li
    onClick={() => onClick(sectionName)}
    className={`flex items-center space-x-4 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ${
      activeSection === sectionName
        ? 'bg-[#F4C2C2] text-[#582630] font-bold'
        : 'text-gray-300 hover:bg-[#3a3d40] hover:text-white'
    }`}
  >
    {children}
    <span className="text-md">{label}</span>
  </li>
);

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, isAdmin }) => {
  return (
    <aside className="w-64 bg-[#1C1920] text-white p-4 flex flex-col space-y-8 flex-shrink-0">
      <div className="flex items-center space-x-3 px-2">
        <GlobeAfricaIcon className="w-10 h-10 text-[#F4C2C2]" />
        <h1 className="text-2xl font-bold text-white tracking-wider">MzansiVPN</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          <NavItem label="VPN Client" sectionName="vpn" activeSection={activeSection} onClick={setActiveSection}>
            <ServerIcon className="h-6 w-6" />
          </NavItem>
          {isAdmin && (
            <NavItem label="Admin Analytics" sectionName="analytics" activeSection={activeSection} onClick={setActiveSection}>
              <AnalyticsIcon className="h-6 w-6" />
            </NavItem>
          )}
        </ul>
      </nav>
      <div className="mt-auto p-4 bg-[#2A2C2F] rounded-lg text-center">
        <ShieldIcon className="w-10 h-10 mx-auto text-green-400 mb-2"/>
        <h4 className="font-bold text-white">Always Secure</h4>
        <p className="text-xs text-gray-400 mt-1">Your digital privacy is our top priority.</p>
      </div>
    </aside>
  );
};

export default Sidebar;