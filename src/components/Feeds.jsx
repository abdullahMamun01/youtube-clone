import React from 'react'
import Navbar from './Layout/Navbar'
import Sidebar from './Layout/Sidebar'

import SearchTags from './SearchTags'
import VideoLists from './video/VideoLists'
import MobileMenu from './Layout/MobileMenu'

const Home = () => {
    return (

        <main className='w-[95%] max-[768px]:w-full mx-auto grid grid-cols-12 overflow-hidden'>
            <div className='col-span-2 max-[768px]:hidden'>
                <Sidebar />
            </div>

            <div className='col-span-10 max-[768px]:col-span-12 px-[30px]  py-2 max-[768px]:px-0'>

                <SearchTags />
                <VideoLists />
            </div>

            <MobileMenu />

        </main>

    )
}
export default Home;