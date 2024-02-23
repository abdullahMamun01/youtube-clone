import React from 'react'
import { API_KEY } from '../../utils/constants'
import useFetchQuery from '../../hooks/useFetchQuery'
import Skeleton from '../ui/skeleton/Skeleton'
import transformDataFn from '../../utils/transformDataFn'

import fetchFromApi from '../../utils/fetchFromApi'
import Video from '../video/Video'

const ChannelVideos = ({ channelId }) => {
    const params = {
        part: 'snippet',
        channelId,
        maxResults: 50,
        q: 'new',
        key: API_KEY
    };

    const { data, isLoading, isError, isPending,error } = useFetchQuery(['yt-videos', params],async () => fetchFromApi('/search', params))

 
    if (isLoading || isPending) {
        return [...new Array(20)].map((_item) => (
            <Skeleton />
        ))
    }
    if (isError) {
        return <div className='text-secondary'>Something wrong error message {error.message}</div>
    }



    const transformData = transformDataFn(data.items)

    return (
        <div className='w-full grid grid-cols-12  '>
            {
                 transformData?.map(item => (
                    <div className='col-span-4 max-[768px]:col-span-12'>
                        <Video key={item.id} video={item} />
                    </div>
                ))
            }

        </div>
    )
}

export default ChannelVideos