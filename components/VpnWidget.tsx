import React from 'react';
import { VpnStatus, Server } from '../types';
import { PowerIcon } from './IconComponents';

interface VpnWidgetProps {
    status: VpnStatus;
    selectedServer: Server;
    connectionTime: number;
    onToggleConnection: () => void;
}

const VpnWidget: React.FC<VpnWidgetProps> = ({ status, selectedServer, connectionTime, onToggleConnection }) => {

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const getStatusInfo = () => {
        switch (status) {
            case VpnStatus.CONNECTED: return { text: 'Connected', color: 'text-green-400', buttonBg: 'bg-green-500/20 hover:bg-green-500/30', ringColor: 'ring-green-400' };
            case VpnStatus.CONNECTING: return { text: 'Connecting...', color: 'text-yellow-400', buttonBg: 'bg-yellow-500/20', ringColor: 'ring-yellow-400 animate-pulse' };
            default: return { text: 'Disconnected', color: 'text-gray-400', buttonBg: 'bg-gray-500/20 hover:bg-gray-500/30', ringColor: 'ring-gray-400' };
        }
    };
    const statusInfo = getStatusInfo();

    return (
        <div className="flex flex-col items-center justify-center bg-[#1C1920] p-6 rounded-lg h-full">
            <h3 className="text-lg font-bold mb-2">{selectedServer.name}</h3>
            <p className="text-sm text-gray-400 mb-6">Click to connect</p>

            <button onClick={onToggleConnection} disabled={status === VpnStatus.CONNECTING} className={`relative w-40 h-40 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none ${statusInfo.buttonBg}`}>
                <div className={`absolute inset-0 rounded-full ring-4 ${statusInfo.ringColor} ring-offset-4 ring-offset-[#1C1920] transition-all`}></div>
                <PowerIcon className={`w-20 h-20 transition-colors duration-300 ${statusInfo.color}`} />
            </button>

            <p className={`mt-6 text-xl font-semibold ${statusInfo.color}`}>{statusInfo.text}</p>
            {status === VpnStatus.CONNECTED && <p className="text-2xl font-mono mt-2">{formatTime(connectionTime)}</p>}
            
            <div className="w-full text-center mt-auto bg-[#2A2C2F] p-4 rounded-lg">
                <p className="text-sm text-gray-400">Your IP Address</p>
                <p className="text-lg font-mono text-white">{status === VpnStatus.CONNECTED ? selectedServer.ip : 'XXX.XXX.XXX.XXX'}</p>
            </div>
        </div>
    );
};

export default VpnWidget;
