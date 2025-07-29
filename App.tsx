import React, { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import MainApp from './components/MainApp';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate checking for an existing session on load
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleLoginSuccess = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (isLoading) {
    return (
        <div className="flex justify-center items-center h-screen bg-[#131010]">
            <div className="text-white text-xl">Loading...</div>
        </div>
    );
  }

  return (
    <>
      {user ? (
        <MainApp user={user} onLogout={handleLogout} />
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default App;