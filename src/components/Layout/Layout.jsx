import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="flex gap-2 max-[768px]:w-full w-[95%] mx-auto justify-center">
            <div className="md:basis-[20%]  max-[768px]:hidden">
                <Sidebar />
            </div>
            <div className="w-full max-[768px]:basis-[95%] basis-[80%] bg-green-900 ">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout