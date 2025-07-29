import { Server, UserSession } from './types';

export const COLORS = {
  teaRose: '#F4C2C2',
  burntUmber: '#8A3324',
  crow: '#2A2C2F',
  darkerCrow: '#1C1920',
  offWhite: '#E5E7EB',
};

export const SERVERS: Server[] = [
  { id: 'za', name: 'South Africa', flag: '🇿🇦', ip: '197.245.128.1', location: { x: '52%', y: '70%' } },
  { id: 'us', name: 'United States', flag: '🇺🇸', ip: '104.26.10.188', location: { x: '25%', y: '40%' } },
  { id: 'gb', name: 'United Kingdom', flag: '🇬🇧', ip: '185.199.108.153', location: { x: '48%', y: '30%' } },
  { id: 'de', name: 'Germany', flag: '🇩🇪', ip: '188.114.97.7', location: { x: '52%', y: '32%' } },
  { id: 'jp', name: 'Japan', flag: '🇯🇵', ip: '172.67.142.234', location: { x: '85%', y: '38%' } },
  { id: 'au', name: 'Australia', flag: '🇦🇺', ip: '103.21.244.0', location: { x: '85%', y: '70%' } },
  { id: 'ca', name: 'Canada', flag: '🇨🇦', ip: '192.206.151.131', location: { x: '26%', y: '30%' } },
  { id: 'br', name: 'Brazil', flag: '🇧🇷', ip: '177.54.148.0', location: { x: '35%', y: '60%' } },
];

export const USER_SESSIONS: UserSession[] = [
    { id: 1, userEmail: 'user@example.com', lastLogin: '2024-07-29 10:30', country: 'South Africa', dataUsedMB: 2450, durationMinutes: 120 },
    { id: 2, userEmail: 'another@example.com', lastLogin: '2024-07-29 09:45', country: 'United Kingdom', dataUsedMB: 850, durationMinutes: 65 },
    { id: 3, userEmail: 'guest@example.com', lastLogin: '2024-07-28 18:15', country: 'United States', dataUsedMB: 5120, durationMinutes: 240 },
    { id: 4, userEmail: 'dev@example.com', lastLogin: '2024-07-28 15:00', country: 'Germany', dataUsedMB: 125, durationMinutes: 25 },
    { id: 5, userEmail: 'test@example.com', lastLogin: '2024-07-27 11:55', country: 'Japan', dataUsedMB: 1530, durationMinutes: 88 },
];