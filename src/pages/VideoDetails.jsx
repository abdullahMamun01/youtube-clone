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
    const { data, isLoading, isPending, isFetched, isError } = useFetchQuery(path)
    const videoInfo = data?.items[0]
    console.log(data, ' id')
    if (isLoading || isPending) {
        return <div>Loading....</div>
    }
    if (isError) {
        return <div> Erorr ....</div>
    }


    return (
        <div className='min-h-screen w-[90%] grid grid-cols-12  mx-auto  truncate'>

            <div className='col-span-8 max-[768px]:col-span-12'>
                {/* Left Side */}
                <div className='w-full mr-8  '>
                    {/* Video Player */}

                    <VideoPlay url={`https://www.youtube.com/watch?v=${videoId}`} />

                    {/*video title */}
                    <div className=''>
                        <h1 className='my-4 text-[18px] max-[768px]:text-[15px] font-bold leading-[1rem] max-[768px]:leading-[26px]'>
                            {videoInfo?.snippet?.localized?.title}
                        </h1>
                    </div>

                    {/* Channel Information */}
                    <div className='mb-6 '>
                        <Link to={`/channel/${videoInfo.snippet.channelId}`}>
                            <ChannelInformation channelId={videoInfo.snippet.channelId} statistics={videoInfo.statistics} channelTitle={videoInfo?.snippet?.channelTitle} />
                        </Link>
                    </div>

                    {/* Video Description */}

                    <VideoDescription description={videoInfo?.snippet?.localized?.description} />

                    {/* video comments */}
                    <VideoComments videoId={videoId} />
                </div>

                {/* Right Side - Related Videos */}
            </div>
            <div className='md:col-span-4 max-[768px]:col-span-12'>
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
