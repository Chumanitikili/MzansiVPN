export interface User {
  email: string;
  isAdmin: boolean;
}

export interface Server {
  id: string;
  name: string;
  flag: string;
  ip: string;
  location: { x: string; y: string };
}

export interface UserSession {
  id: number;
  userEmail: string;
  lastLogin: string;
  country: string;
  dataUsedMB: number;
  durationMinutes: number;
}

export enum VpnStatus {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR'
}

export enum TwoFactorMethod {
  TOTP = 'TOTP',
  PUSH = 'PUSH',
  SMS = 'SMS'
}