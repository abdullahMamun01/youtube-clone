import React from 'react'
import VideoComment from './VideoComment'
import useFetchQuery from '../hooks/useFetchQuery'
import { API_KEY } from '../utils/constants'

const VideoComments = ({ videoId }) => {
    const path = `commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
    const { data, isLoading, isPending } = useFetchQuery(path)
    console.log(data)
    return (
        <div>
            {
                (isLoading || isPending) ? <div>Comments....</div>
                    :

                    data?.items.map(comment => (
                        <VideoComment 
                        key={comment.id}
                        imgUrl={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                        publishedAt={comment.snippet.topLevelComment.snippet.publishedAt}
                        reply={comment.snippet.topLevelComment.snippet.textDisplay}
                        authorDisplayName={comment.snippet.topLevelComment.snippet.authorDisplayName}
                        />
                    ))
            }
            <VideoComment />
            <VideoComment />
            <VideoComment />
            <VideoComment />
            <VideoComment />

        </div>
    )
}

export default VideoComments