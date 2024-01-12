import React from 'react'
import useFetchQuery from '../../hooks/useFetchQuery'
import { instanceTwo } from '../../utils/axios'
import { RelatedVideo } from './RelatedVideo'
import { Link } from 'react-router-dom'


const getRelatedVideos = async (params) => {
    try {
        const { data } = await instanceTwo.get('/related-contents/', { params })
        return data
    } catch (e) {
        console.log(e.message)
    }
}

const RelatedVideoList = ({ videoId }) => {
    const params = {
        id: videoId,

    }

    const { data, isLoading, isError, error } = useFetchQuery(['related-videos', params], async () => getRelatedVideos(params))
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }
    console.log(data.contents)
    return (
        <div className='w-full px-5 max-[640px]:p-0 my-1 m-auto'>
            {
                data.contents.map(item => (
                   
                        <RelatedVideo
                            channelName={item?.video?.author?.title}
                            publishedTimeText={item?.video?.publishedTimeText}
                            thumbnails={item?.video?.thumbnails}
                            title={item?.video?.title}
                            videoId={item?.video?.videoId}
                            views={item?.video?.stats.views}
                        />
                   
                ))
            }
        </div>
    )
}

export default RelatedVideoList