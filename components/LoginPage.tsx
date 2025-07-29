import React, { useState } from 'react';
import { TwoFactorMethod, User } from '../types';
import { GlobeAfricaIcon, PhoneIcon, MailIcon, BellIcon } from './IconComponents';

interface LoginPageProps {
  onLoginSuccess: (user: User) => void;
}

const CredentialsStep: React.FC<{ onNext: (email: string) => void }> = ({ onNext }) => {
  const [email, setEmail] = useState('user@example.com');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(email);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-white mb-2">Sign In</h2>
      <p className="text-gray-400 mb-6">Enter your credentials to connect.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-300" htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-3 bg-[#1C1920] border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-[#F4C2C2] focus:outline-none" required />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300" htmlFor="password">Password</label>
          <input id="password" type="password" defaultValue="password" className="w-full mt-1 p-3 bg-[#1C1920] border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-[#F4C2C2] focus:outline-none" required />
        </div>
        <button type="submit" className="w-full bg-[#F4C2C2] text-[#582630] font-bold py-3 rounded-md hover:bg-opacity-90 transition-all">
          Sign In
        </button>
         <p className="text-xs text-center text-gray-500 pt-2">Use `admin@example.com` to view admin panel.</p>
      </form>
    </>
  );
};

const TwoFactorStep: React.FC<{ onSelectMethod: (method: TwoFactorMethod) => void }> = ({ onSelectMethod }) => (
  <>
    <h2 className="text-2xl font-bold text-white mb-2">Verify Your Identity</h2>
    <p className="text-gray-400 mb-6">Choose a method for 2-Factor Authentication.</p>
    <div className="space-y-3">
      <button onClick={() => onSelectMethod(TwoFactorMethod.TOTP)} className="w-full flex items-center space-x-4 p-4 bg-[#1C1920] border border-gray-600 rounded-md hover:border-[#F4C2C2] transition-all">
        <PhoneIcon className="w-6 h-6 text-[#F4C2C2]" />
        <span className="text-white font-medium">Authenticator App</span>
      </button>
      <button onClick={() => onSelectMethod(TwoFactorMethod.PUSH)} className="w-full flex items-center space-x-4 p-4 bg-[#1C1920] border border-gray-600 rounded-md hover:border-[#F4C2C2] transition-all">
        <BellIcon className="w-6 h-6 text-[#F4C2C2]" />
        <span className="text-white font-medium">Push Notification</span>
      </button>
      <button onClick={() => onSelectMethod(TwoFactorMethod.SMS)} className="w-full flex items-center space-x-4 p-4 bg-[#1C1920] border border-gray-600 rounded-md hover:border-[#F4C2C2] transition-all">
        <MailIcon className="w-6 h-6 text-[#F4C2C2]" />
        <span className="text-white font-medium">SMS Code</span>
      </button>
    </div>
  </>
);

const VerificationStep: React.FC<{ method: TwoFactorMethod | null; onVerify: () => void }> = ({ method, onVerify }) => {
  const [loading, setLoading] = useState(false);

  const handleVerify = (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onVerify();
      setLoading(false);
    }, 1500);
  };
  
  if (method === TwoFactorMethod.PUSH) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Check your device</h2>
        <p className="text-gray-400 mb-6">We've sent a notification to your registered device. Please approve it.</p>
        <div className="flex justify-center items-center my-8">
            <div className="animate-ping absolute h-16 w-16 rounded-full bg-[#F4C2C2] opacity-50"></div>
            <PhoneIcon className="w-16 h-16 text-[#F4C2C2]"/>
        </div>
        <button onClick={() => handleVerify()} className="w-full mt-4 bg-[#F4C2C2] text-[#582630] font-bold py-3 rounded-md hover:bg-opacity-90 transition-all">
            {loading ? 'Verifying...' : 'Simulate Approval'}
        </button>
      </div>
    );
  }
  
  return (
      <>
        <h2 className="text-2xl font-bold text-white mb-2">Enter Code</h2>
        <p className="text-gray-400 mb-6">Enter the 6-digit code from your {method === TwoFactorMethod.SMS ? 'SMS message' : 'authenticator app'}.</p>
        <form onSubmit={handleVerify} className="space-y-4">
            <input type="text" maxLength={6} placeholder="123456" className="w-full text-center tracking-[1em] p-3 bg-[#1C1920] border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-[#F4C2C2] focus:outline-none" />
            <button type="submit" className="w-full bg-[#F4C2C2] text-[#582630] font-bold py-3 rounded-md hover:bg-opacity-90 transition-all">
                {loading ? 'Verifying...' : 'Verify'}
            </button>
        </form>
    </>
  );
};

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState<TwoFactorMethod | null>(null);
  const [email, setEmail] = useState('');

  const handleCredentialsSuccess = (userEmail: string) => {
      setEmail(userEmail);
      setStep(2);
  };
  const handleMethodSelect = (selectedMethod: TwoFactorMethod) => {
    setMethod(selectedMethod);
    setStep(3);
  };
  const handleVerificationSuccess = () => {
    onLoginSuccess({
      email: email,
      isAdmin: email.toLowerCase() === 'admin@example.com',
    });
  };

  return (
    <div className="min-h-screen bg-[#131010] flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md">
            <div className="text-center mb-8">
                <GlobeAfricaIcon className="w-16 h-16 mx-auto text-[#F4C2C2]"/>
                <h1 className="text-4xl font-bold text-white mt-4">MzansiVPN</h1>
                <p className="text-gray-400">Secure & Private Connection</p>
            </div>
            <div className="bg-[#2A2C2F] p-8 rounded-lg shadow-2xl">
                {step === 1 && <CredentialsStep onNext={handleCredentialsSuccess} />}
                {step === 2 && <TwoFactorStep onSelectMethod={handleMethodSelect} />}
                {step === 3 && <VerificationStep method={method} onVerify={handleVerificationSuccess} />}
            </div>
        </div>
    </div>
  );
};

export default LoginPage;