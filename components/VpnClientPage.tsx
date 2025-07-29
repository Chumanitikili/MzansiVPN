import React, { useState, useEffect } from 'react';
import { VpnStatus, Server } from '../types';
import { SERVERS } from '../constants';
import { SignalIcon } from './IconComponents';
import VpnWidget from './VpnWidget';

const VpnClientPage: React.FC = () => {
    const [status, setStatus] = useState<VpnStatus>(VpnStatus.DISCONNECTED);
    const [selectedServer, setSelectedServer] = useState<Server>(SERVERS[0]);
    const [connectionTime, setConnectionTime] = useState(0);

    useEffect(() => {
        let timer: number;
        if (status === VpnStatus.CONNECTED) {
            timer = window.setInterval(() => {
                setConnectionTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            setConnectionTime(0);
        }
        return () => window.clearInterval(timer);
    }, [status]);

    const handleToggleConnection = () => {
        if (status === VpnStatus.DISCONNECTED || status === VpnStatus.ERROR) {
            setStatus(VpnStatus.CONNECTING);
            setTimeout(() => {
                setStatus(VpnStatus.CONNECTED);
            }, 2000);
        } else {
            setStatus(VpnStatus.DISCONNECTED);
        }
    };
    
    return (
        <div className="p-4 md:p-8 text-white flex flex-col lg:flex-row gap-8 h-full">
            {/* Left Side: Connection Control */}
            <div className="lg:w-1/3 flex flex-col">
                <VpnWidget 
                    status={status}
                    selectedServer={selectedServer}
                    connectionTime={connectionTime}
                    onToggleConnection={handleToggleConnection}
                />
            </div>

            {/* Right Side: Server List & Map */}
            <div className="lg:w-2/3 flex flex-col bg-[#1C1920] p-6 rounded-lg">
                <div className="relative h-48 md:h-64 mb-6 bg-cover bg-center rounded-lg" style={{backgroundImage: "url('https://raw.githubusercontent.com/Faydisk/Vector-World-Map/master/src/Vector-World-Map.svg')"}}>
                    {status === VpnStatus.CONNECTED && (
                        <>
                            <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{ left: '15%', top: '35%' }}></div>
                            <div className="absolute w-2 h-2 bg-blue-400 rounded-full" style={{ left: '15%', top: '35%' }}></div>
                            <div className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping" style={{ left: selectedServer.location.x, top: selectedServer.location.y }}></div>
                            <div className="absolute w-2 h-2 bg-green-400 rounded-full" style={{ left: selectedServer.location.x, top: selectedServer.location.y }}></div>
                        </>
                    )}
                </div>
                <h3 className="text-xl font-bold mb-4">Select Server</h3>
                <div className="flex-grow overflow-y-auto pr-2">
                    <ul className="space-y-2">
                        {SERVERS.map(server => (
                            <li key={server.id} 
                                onClick={() => status === VpnStatus.DISCONNECTED && setSelectedServer(server)}
                                className={`flex items-center p-3 rounded-lg transition-all duration-200 ${status !== VpnStatus.DISCONNECTED ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'} ${selectedServer.id === server.id ? 'bg-[#F4C2C2] text-[#582630]' : 'bg-[#2A2C2F] hover:bg-[#3a3d40]'}`}>
                                <span className="text-2xl mr-4">{server.flag}</span>
                                <span className={`flex-grow font-semibold ${selectedServer.id === server.id && 'font-bold'}`}>{server.name}</span>
                                <SignalIcon className="w-6 h-6 text-green-400" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VpnClientPage;