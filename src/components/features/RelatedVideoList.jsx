import React from 'react'
import useFetchQuery from '../../hooks/useFetchQuery'
import { instanceTwo } from '../../utils/axios'
import { RelatedVideo } from './RelatedVideo'

const getRelatedVideos = async ({queryKey}) => {
    
    const params = queryKey[1]
    try {
        const { data } = await instanceTwo.get('/related-contents/', { params })
        return data
    } catch (e) {
        return e.message
    }
}

const RelatedVideoList = ({ videoId }) => {
    const params = {
        id: videoId,
    }

    const { data, isLoading, loading, isError, error } = useFetchQuery(['related-videos', params], getRelatedVideos)

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }
    const filterWithoutPlaylist = data?.contents?.filter(video => !video.playlist)
    return (
        <div className='w-full px-5 max-[640px]:p-0 my-1 m-auto'>
            {
                filterWithoutPlaylist?.map(item => (
                

                        <RelatedVideo
                            channelName={item?.video?.author?.title}
                            publishedTimeText={item?.video?.publishedTimeText}
                            thumbnails={item?.video?.thumbnails}
                            title={item?.video?.title}
                            videoId={item?.video?.videoId}
                            views={item?.video?.stats?.views}
                        />
                  

                ))
            }
        </div>
    )
}

export default RelatedVideoList