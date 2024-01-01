import React, { useState } from 'react'
import useSelection from '../hooks/useSelection';

const sidebarOptions = [
    {
        name: "Home",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    },
    {
        name: 'Shorts',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-video"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="m10 11 5 3-5 3v-6Z" /></svg>
    },
    {
        name: 'Subscriptions',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-square"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="m9 8 6 4-6 4Z" /></svg>
    },
    {
        name: "History",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></svg>
    }
];
export default function Sidebar() {
    const { state, handleClick } = useSelection(sidebarOptions, "Home")
    return (
        <aside className='min-h-screen w-full flex flex-col gap-2'>
            {
                sidebarOptions.map((option, i) => (
                    <div key={i} onClick={() => handleClick(option.name)} className={`flex flex-row py-2 gap-x-3 my-2${state[option.name] && 'bg-[#bbab8c3d] rounded-md font-bold'} font-md hover:bg-[#bbab8c73] hover:rounded-lg px-2`}>
                        <div className={`text-gray-600 ${state[option.name] && 'text-gray-950 font-bold'}`}>
                            {option.icon}
                        </div>
                        <button >
                            {option.name}
                        </button>
                    </div>
                ))
            }
        </aside>
    )
}
