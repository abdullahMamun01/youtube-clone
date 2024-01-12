import React, { useEffect, useLayoutEffect, useState } from 'react'
import VideoComment from './VideoComment'
import useFetchQuery from '../../hooks/useFetchQuery'
import { API_KEY } from '../../utils/constants'
import useMediaQuery from '../../hooks/useMediaQuery'
import Accordion from '../ui/Accordion'
import fetchFromApi from '../../utils/fetchFromApi'

const VideoComments = ({ videoId }) => {
    const params = {
        part: 'snippet,replies',
        maxResults: 50,
        videoId ,
        key: API_KEY,
      };
 
    const { data, isLoading, isPending, isError, error } = useFetchQuery(['yt-videos', params],async () => fetchFromApi('/commentThreads' ,params))
    
    const [showComments, setShowComments] = useState(false)
    const { isSmallDevice } = useMediaQuery('(max-width: 767px )')

    const handleShowComments = () => {
        setShowComments(!showComments)
    }

    if (isLoading || isPending) {
        return <div>Comments....</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }
    const totalComments = `comments ${data.items.length} ...`
    return (
        <div>
            <div onClick={handleShowComments} className='p-2 min-[768px]:hidden bg-neutral w-full my-3 rounded-xl'>
                <Accordion totalComments={totalComments}/>
                {/* <div className=''>
                    <h1 className='text-gray-700 font-semibold'>Comments 300</h1>
                    <div className='w-full text-gray-700 bg-gray-100 rounded-[20px] shadow-lg px-4 py-1 my-2 cursor-pointer'>
                        show comments...
                    </div>
                </div> */}
            </div>

            {/* show comment on small device */}
            <div >
                {
                    (showComments || !isSmallDevice) && data?.items.map(comment => (
                        <VideoComment
                            key={comment.id}
                            imgUrl={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                            publishedAt={comment.snippet.topLevelComment.snippet.publishedAt}
                            reply={comment.snippet.topLevelComment.snippet.textDisplay}
                            authorDisplayName={comment.snippet.topLevelComment.snippet.authorDisplayName}
                        />
                    ))
                }
            </div>
                
        </div>
    )
}

export default VideoComments