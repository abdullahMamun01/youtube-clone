import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import VideoLists from './VideoLists'
import SearchTags from './SearchTags'

const Home = () => {
    return (
        <div>
            <main className='w-[95%] mx-auto flex'>
                <div className='basis-[15%]'>
                    <Sidebar />
                </div>
                <div className='basis-[85%] px-[30px] py-2'>
                    <div>
                        <SearchTags />
                    </div>
                    <div>
                        <VideoLists />
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Home;