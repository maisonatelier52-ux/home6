import React from 'react';
import { Moon, Sun, Cloud, CloudRain, Wind, Droplets, Gauge, Zap } from 'lucide-react';

export default function SidebarWeather() {
    return (
        <div className="bg-black text-white p-4 flex flex-col items-center text-center">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-6">NEW YORK, NY</div>

            <div className="flex items-center justify-center gap-6 mb-2">
                <Moon size={35} className="text-white" />
                <div className="flex flex-col items-start">
                    <span className="text-5xl font-light leading-none">43°</span>
                </div>
            </div>

            <div className="text-xl font-medium mb-0">clear</div>

            <div className="text-[12px] text-gray-400 mb-0 flex items-center gap-2">
                <span>7:18 am</span>
                <Sun size={12} className="text-yellow-500" />
                <span>4:48 pm EST</span>
            </div>

            <div className="w-full space-y-2 mb-4 text-[12px] text-gray-300">
                <div className="flex justify-between border-b border-gray-800 pb-1">
                    <span>feels like: 43°f</span>
                    <Wind size={14} className="opacity-50" />
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-1">
                    <span>wind: 0mph e</span>
                    <Wind size={14} className="opacity-50" />
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-1">
                    <span>humidity: 82%</span>
                    <Droplets size={14} className="opacity-50" />
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-1">
                    <span>pressure: 30.31"hg</span>
                    <Gauge size={14} className="opacity-50" />
                </div>
                <div className="flex justify-between">
                    <span>uv index: 0</span>
                    <Zap size={14} className="opacity-50" />
                </div>
            </div>

            <div className="grid grid-cols-5 gap-2 w-full mb-8">
                {[
                    { time: '2 am', temp: '41°' },
                    { time: '3 am', temp: '41°' },
                    { time: '4 am', temp: '39°' },
                    { time: '5 am', temp: '39°' },
                    { time: '6 am', temp: '39°' },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                        <span className="text-[10px] text-gray-500">{item.time}</span>
                        <span className="text-[11px] font-bold">{item.temp}</span>
                        <Cloud size={16} className="text-gray-400" />
                    </div>
                ))}
            </div>

            <button className="text-[11px] font-bold uppercase hover:text-red-500 transition-colors">
                New York, NY 10 days weather forecast ▸
            </button>
        </div>
    );
}
