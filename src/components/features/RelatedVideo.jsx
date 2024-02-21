import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const RelatedVideo = ({ thumbnails, title, channelName, videoId, publishedTimeText }) => {
    const navigate = useNavigate()
    const redirectVideoPath = () => {
        if (videoId) {
            setTimeout(() => {
                window.scrollTo(0, 0);
            },500)
            navigate(`/video/${videoId}`)
        }
    }

    return (

            <>
                <div className='grid grid-cols-12 gap-2 my-3 cursor-pointer' onClick={redirectVideoPath}>

                    <figure className="max-w-lg col-span-5 max-[640px]:col-span-12">
                        <img className="max-[640px]:w-full max-[640px]:h-full w-[140px] h:[100px]   object-cover md:rounded-md hover:rounded-none " src={thumbnails[1].url} alt="image description"
                        />
                    </figure>

                    <div className='col-span-7 max-[640px]:col-span-12'>
                        <h1 className='text-secondary text-lg'>
                            {title}
                        </h1>
                        <div className='flex gap-1'>
                            {/* <h6 className='text-[#606060] m-1'>{channelName}</h6> */}
                            <h6 className='text-sky font-semibold text-sm m-1 max-[768px]:text-[12px]'>{channelName}</h6>

                            <small className='my-auto text-gray m-1 max-[768px]:text-sm'>{publishedTimeText}</small>
                        </div>
                    </div>

                </div>
            </>
        
    )
}
