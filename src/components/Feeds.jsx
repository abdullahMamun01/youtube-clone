import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import VideoLists from './VideoLists'
import SearchTags from './SearchTags'

const Home = () => {
    return (

        <main className='w-[95%] max-[768px]:w-full mx-auto grid grid-cols-12'>
            <div className='col-span-2 max-[768px]:hidden'>
                <Sidebar />
            </div>
            <div className='col-span-10 max-[768px]:col-span-12 px-[30px] py-2'>
                <SearchTags />
                <VideoLists />
            </div>
        </main>

    )
}
export default Home;