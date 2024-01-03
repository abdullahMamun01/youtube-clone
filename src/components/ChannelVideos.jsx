import React from 'react'
import { API_KEY } from '../utils/constants'
import useFetchQuery from '../hooks/useFetchQuery'
import Skeleton from './ui/Skeleton'
import transformDataFn from '../utils/transformDataFn'
import Video from './Video'

const ChannelVideos = ({channelId}) => {
    const path = `activities?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=50&key=${API_KEY}`
    const {data,isLoading ,isError ,isPending} = useFetchQuery(path)
    console.log(data)
    if(isLoading || isPending){
        return [...new Array(20)].map(item => (
            <Skeleton/>
        ))
    }
    if(isError){
        return <div>Something wrong</div>
    }

    /* 
    const {videoId, title, thumbnails, channelName, publishedAt } = video
    const titleSplit = title.slice(0, 66)
    const dateDifference = getDateDifference(publishedAt)
    
    */
    const transformData = data.items.map(item => ({
        id: item?.id ,
        videoId : item?.contentDetails?.upload?.videoId ,
        title: item?.snippet?.title,
        thumbnails: item?.snippet?.thumbnails ,
        channelName : item?.snippet?.channelTitle,
        publishedAt : item?.snippet?.publishedAt
    }))

    console.log(transformData)
  return (
    <div className='w-full grid grid-cols-12  '>
        {
           transformData && transformData?.map(item =>(
                <div className='col-span-4 max-[768px]:col-span-12'>
                    <Video key={item.id} video={item}/>
                </div>
            ))
        }
        
    </div>
  )
}

export default ChannelVideos