import React from 'react';
import VideoPlay from './VideoPlay';
import { useParams } from 'react-router-dom';
import VideoLists from './VideoLists';
import ChannelInformation from './ChannelInformation';
import { VideoDescription } from './VideoDescription';
import useFetchQuery from '../hooks/useFetchQuery';
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=SqcY0GlETPk&key=[YOUR_API_KEY]
const VideoDetails = () => {
    const { videoId } = useParams();
    const path = `videos?part=snippet%2Cstatistics&id=${videoId}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
    const { data, isPending, isError, error, isLoading, isFetched } = useFetchQuery(path)
    const videoInfo = data?.items[0]
    console.log(videoInfo, 'video details')
    return (
        <div className='min-h-screen w-[90%] mx-auto flex'>
            {/* Left Side */}
            <div className='w-full mr-8'>
                {/* Video Player */}
                <div className='mb-6'>
                    <VideoPlay url={`https://www.youtube.com/watch?v=${videoId}`} />
                </div>
                {/*video title */}
                <div>
                    <h1 className='my-4 text-[18px] font-bold leading-[1rem]'>{videoInfo?.snippet?.localized?.title}</h1>
                </div>

                {/* Channel Information */}
                <div className='mb-6'>
                    <ChannelInformation statistics={videoInfo?.statistics} channelTitle={videoInfo?.snippet?.channelTitle} />
                </div>

                {/* Video Description */}
                <div>
                    <VideoDescription description={videoInfo?.snippet?.localized?.description} />
                </div>
            </div>

            {/* Right Side - Related Videos */}
            <div className='w-[30%]'>
                <div className='bg-gray-200 p-4'>
                    <h2 className='text-xl font-semibold mb-4'>Related Videos</h2>
                    {/* Include your related videos component here */}
                    {/* Example: <RelatedVideos /> */}
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;
