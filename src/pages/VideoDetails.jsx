import React, { useState } from 'react';
import VideoPlay from '../components/video/VideoPlay';
import {  useParams } from 'react-router-dom';

import ChannelInformation from '../components/channel/ChannelInformation';

import useFetchQuery from '../hooks/useFetchQuery';
import VideoComments from '../components/videoComments/VideoComments';
import { API_KEY } from '../utils/constants';
import RelatedVideoList from '../components/features/RelatedVideoList';
import fetchFromApi from '../utils/fetchFromApi';
import { VideoDescription } from '../components/video/VideoDescription';

const VideoDetails = () => {
    const { videoId } = useParams();
    const params = {
        part: 'snippet,statistics',
        id: videoId,
        key: API_KEY
    }
    
    const { data, isLoading, isPending, isFetched, isError } = useFetchQuery(['yt-videos', params],async () => fetchFromApi('/videos', params))
    
    const videoInfo = data?.items[0]

    if (isLoading || isPending ) {
        return <div className='text-secondary'>Loading....</div>
    }
    if (isError) {
        return <div className='text-secondary'> Erorr ....</div>
    }


    return (
        <div className='min-h-screen w-[90%] grid grid-cols-12  mx-auto  truncate'>

            <div className='col-span-8 max-[768px]:col-span-12'>
                {/* Left Side */}
                <div className='w-full mr-8  '>
                    {/* Video Player */}
                    <VideoPlay url={`https://www.youtube.com/watch?v=${videoId}`} />

                    {/*video title */}
                    <h1 className='my-4 text-[20px] text-secondary max-[768px]:text-lg md:mt-6 font-bold leading-[1.5rem] max-[768px]:leading-[26px] text-pretty '>
                        {videoInfo?.snippet?.localized?.title}
                    </h1>

                    {/* Channel Information */}
                    <div className='mb-6 '>
                        <ChannelInformation channelId={videoInfo?.snippet?.channelId} statistics={videoInfo?.statistics} channelTitle={videoInfo?.snippet?.channelTitle} />
                    </div>

                    {/* Video Description */}
                    <VideoDescription description={videoInfo?.snippet?.localized?.description} />

                    {/* video comments */}
                    <VideoComments videoId={videoId} />
                </div>

                {/*  Related Videos */}
            </div>
            <div className='md:col-span-4 max-[768px]:col-span-12'>
                <RelatedVideoList videoId={videoId}/>
                {/* <div className='bg-gray-200 p-4'>
                    <h2 className='text-xl font-semibold mb-4'>Related Videos</h2> */}
                    {/* Include your related videos component here */}
                    {/* Example: <RelatedVideos /> */}
                {/* </div> */}
            </div>

            *
        </div>
    );
};

export default VideoDetails;
