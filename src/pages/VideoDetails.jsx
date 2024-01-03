import React, { useState } from 'react';
import VideoPlay from '../components/VideoPlay';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';

import ChannelInformation from '../components/ChannelInformation';
import { VideoDescription } from '../components/VideoDescription';
import useFetchQuery from '../hooks/useFetchQuery';
import VideoComments from '../components/VideoComments';
import { API_KEY } from '../utils/constants';

const VideoDetails = () => {
    const { videoId } = useParams();
    const path = `videos?part=snippet%2Cstatistics&id=${videoId}&key=${API_KEY}`
    const { data, isLoading, isPending, isFetched ,isError} = useFetchQuery(path)
    const videoInfo = data?.items[0]
    console.log(data , ' id')
    if(isLoading || isPending){
        return <div>Loading....</div>
    }
    if(isError){
        return <div> Erorr ....</div>
    }
 

    return (
        <div className='min-h-screen w-[90%] grid md:grid-cols-12 mx-auto '>
            {
                    <div className='md:col-span-8'>
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
                                <Link  to={`/channel/${videoInfo.snippet.channelId}`}>
                                    <ChannelInformation channelId={videoInfo.snippet.channelId} statistics={videoInfo.statistics} channelTitle={videoInfo?.snippet?.channelTitle} />
                                </Link>
                            </div>

                            {/* Video Description */}
                            <div>
                                <VideoDescription description={videoInfo?.snippet?.localized?.description} />
                            </div>
                            {/* video comments */}
                            <VideoComments videoId={videoId} />
                        </div>

                        {/* Right Side - Related Videos */}
                        <div className='md:col-span-4'>
                            <div className='bg-gray-200 p-4'>
                                <h2 className='text-xl font-semibold mb-4'>Related Videos</h2>
                                {/* Include your related videos component here */}
                                {/* Example: <RelatedVideos /> */}
                            </div>
                        </div>
                    </div>

            }
        </div>
    );
};

export default VideoDetails;
