// import React from 'react'

// const ChannelInformation = ({ channelId, channelTitle, statistics }) => {
    
//     return (
//         <div className='border-y py-3 px-1 border-gray-400'>
//             <div className='flex flex-row flex-wrap gap-3'>
//                 <div className='flex gap-3'>
//                     <img className='rounded-full my-auto w-[40px] h-[40px] ' src="https://yt3.ggpht.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s88-c-k-c0x00ffffff-no-rj" alt="" />
//                     <div>
//                         <h1 className='text-sky-600 font-semibold text-[17px]'>{channelTitle}</h1>
//                         <h6 className='text-[14px] text-[#606060] font-semibold'>3.68M subscribers</h6>
//                     </div>
//                 </div>
//                 <div className='max-[768px]:ml-0 max-[768px]:my-2 ml-auto my-auto'>
//                     <span className='text-gray-800 text-[16px] font-bold border rounded-[20px] bg-gray-200 p-3'>total likes
//                         <span className='text-sky-700 mx-2'>{ statistics?.likeCount}</span>
//                     </span>
//                     <span className='mx-1'></span>
//                     <span className='text-gray-800 text-[16px] font-bold border rounded-[20px] bg-gray-200 p-3'>
//                         views<span className='text-sky-700 mx-2'>{ statistics?.viewCount}</span>
//                     </span>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ChannelInformation


import React from 'react'
import useFetchQuery from '../hooks/useFetchQuery'
import { formatSubscribersCount } from '../utils/formatSubscribersCount'

const ChannelInformation = ({ channelId, channelTitle, statistics }) => {
    const path = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
    const { data, isLoading, isFetched, isPending } = useFetchQuery(path)
    const channelInfo = data?.items[0]
    // const { subscriberCount } = channelInfo?.statistics
    const thumbnails = channelInfo?.snippet?.thumbnails
    console.log(channelInfo , channelId, 'channel ')
    const totalSubscribers = data && formatSubscribersCount(channelInfo.statistics.subscriberCount)
    return (
        <div className='border-y py-3 px-1 border-gray-400'>
            {
                (isLoading || isPending) ?
                    <div>Loading....</div>
                    :
                    <div className='flex flex-row flex-wrap gap-3'>
                        <div className='flex gap-3'>
                            <img className='rounded-full my-auto w-[40px] h-[40px] ' src={thumbnails?.default?.url} alt="" />
                            <div>
                                <h1 className='text-sky-600 font-semibold text-[17px]'>{channelTitle}</h1>
                                <h6 className='text-[14px] text-[#606060] font-semibold'><span>{totalSubscribers}</span> subscribers</h6>
                            </div>
                        </div>
                        <div className='max-[768px]:ml-0 max-[768px]:my-2 ml-auto my-auto'>
                            <span className='text-gray-800 text-[16px] font-bold border rounded-[20px] bg-gray-200 p-3'>total likes
                                <span className='text-sky-700 mx-2'>{statistics?.likeCount}</span>
                            </span>
                            <span className='mx-1'></span>
                            <span className='text-gray-800 text-[16px] font-bold border rounded-[20px] bg-gray-200 p-3'>
                                views<span className='text-sky-700 mx-2'>{statistics?.viewCount}</span>
                            </span>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ChannelInformation