import React from 'react'

const ChannelInformation = ({ channelId, channelTitle, statistics }) => {

    return (
        <div className='border-y py-3 px-1 border-gray-400'>
            <div className='flex flex-row flex-wrap gap-3'>
                <div className='flex gap-3'>
                    <img className='rounded-full my-auto w-[40px] h-[40px] ' src="https://yt3.ggpht.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s88-c-k-c0x00ffffff-no-rj" alt="" />
                    <div>
                        <h1 className='text-sky-600 font-semibold text-[17px]'>{channelTitle}</h1>
                        <h6 className='text-[14px] text-[#606060] font-semibold'>3.68M subscribers</h6>
                    </div>
                </div>
                <div className='max-[768px]:ml-0 max-[768px]:my-2 ml-auto my-auto'>
                    <span className='text-gray-800 text-[16px] font-bold border rounded-[20px] bg-gray-200 p-3'>total likes
                        <span className='text-sky-700 mx-2'>{ statistics?.likeCount}</span>
                    </span>
                    <span className='mx-1'></span>
                    <span className='text-gray-800 text-[16px] font-bold border rounded-[20px] bg-gray-200 p-3'>
                        views<span className='text-sky-700 mx-2'>{ statistics?.viewCount}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ChannelInformation