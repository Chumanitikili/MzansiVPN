import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import VpnClientPage from './VpnClientPage';
import AdminAnalyticsPage from './AdminAnalyticsPage';
import { User } from '../types';

interface MainAppProps {
  user: User;
  onLogout: () => void;
}

const MainApp: React.FC<MainAppProps> = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState('vpn');

  const renderSection = () => {
    switch (activeSection) {
      case 'vpn':
        return <VpnClientPage />;
      case 'analytics':
        return user.isAdmin ? <AdminAnalyticsPage /> : <VpnClientPage />;
      default:
        return <VpnClientPage />;
    }
  };

  return (
    <div className="flex h-screen bg-[#131010]">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} isAdmin={user.isAdmin} />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <Header activeSection={activeSection} onLogout={onLogout} />
        <div className="flex-1">
            {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default MainApp;