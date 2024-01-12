
import React from 'react'
import useFetchQuery from '../../hooks/useFetchQuery'
import { formatSubscribersCount } from '../../utils/formatSubscribersCount'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../utils/constants'
import fetchFromApi from '../../utils/fetchFromApi'

const ChannelInformation = ({ channelId, channelTitle, statistics }) => {
    const params = {
        part: 'snippet,statistics',
        id: channelId,
        key: API_KEY
    }

    const { data, isLoading, isError, isPending, error } = useFetchQuery(['yt-videos', params],async () => fetchFromApi('/channels' ,params))
    const channelInfo = data?.items[0]

    const thumbnails = channelInfo?.snippet?.thumbnails
    
    const totalSubscribers = data && formatSubscribersCount(channelInfo.statistics.subscriberCount)

    if (isLoading) {
        return <div className='text-secondary'>Loading...</div>
    }
    if (isError) {
        return <div className='text-secondary'>{error.message}</div>
    }
    return (
        <div className='border-y py-3 px-1 border-gray-400'>

            <div className='flex flex-row flex-wrap gap-3'>
                <Link to={`/channel/${channelId}`}>
                    <div className='flex gap-3'>
                        <img className='rounded-full my-auto w-[40px] h-[40px] ' src={thumbnails?.default?.url} alt="" />
                        <div>
                            <h1 className='text-sky font-semibold text-lg '>{channelTitle}</h1>
                            <h6 className='text-lg text-gray font-semibold'><span>{totalSubscribers}</span> subscribers</h6>
                        </div>
                    </div>
                </Link>

                <div className='max-[768px]:ml-0 max-[768px]:my-2 ml-auto my-auto'>
                    <span className='text-gray-800 text-[16px] font-bold border text-secondary rounded-[20px] bg-gray-200 p-3'>total likes
                        <span className='text-sky-700 mx-2'>{statistics?.likeCount}</span>
                    </span>
                    <span className='mx-1'></span>
                    <span className='text-gray-800 text-[16px] font-bold border text-secondary rounded-[20px] bg-gray-200 p-3'>
                        views<span className='text-sky-700 mx-2'>{statistics?.viewCount}</span>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default ChannelInformation