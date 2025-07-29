import React from 'react';
import { USER_SESSIONS, SERVERS } from '../constants';

const AdminAnalyticsPage: React.FC = () => {
    return (
        <section className="p-8 text-white">
            <div className="bg-[#1C1920] rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">User Session Analytics</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left table-auto">
                        <thead className="bg-[#2A2C2F]">
                            <tr>
                                <th className="p-3 text-sm font-semibold tracking-wide">User Email</th>
                                <th className="p-3 text-sm font-semibold tracking-wide">Last Login</th>
                                <th className="p-3 text-sm font-semibold tracking-wide">Connected Server</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-right">Data Used (MB)</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-right">Duration (min)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {USER_SESSIONS.map((session) => {
                                const server = SERVERS.find(s => s.name === session.country);
                                return (
                                <tr key={session.id} className="hover:bg-[#2A2C2F]">
                                    <td className="p-3 text-sm text-gray-300 whitespace-nowrap">{session.userEmail}</td>
                                    <td className="p-3 text-sm text-gray-300 whitespace-nowrap">{session.lastLogin}</td>
                                    <td className="p-3 text-sm text-gray-300 whitespace-nowrap">
                                        <div className="flex items-center">
                                            {server && <span className="text-lg mr-3">{server.flag}</span>}
                                            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-[#F4C2C2] bg-[#8A3324] rounded-lg bg-opacity-50">{session.country}</span>
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-gray-300 whitespace-nowrap text-right">{session.dataUsedMB.toLocaleString()}</td>
                                    <td className="p-3 text-sm text-gray-300 whitespace-nowrap text-right">{session.durationMinutes}</td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AdminAnalyticsPage;