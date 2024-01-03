import React from 'react'
import ChannelThumbnails from '../components/ChannelThumbnails'
import ChannelDetails from '../components/ChannelDetails'
import { useParams } from 'react-router-dom'
import useFetchQuery from '../hooks/useFetchQuery'
import { API_KEY } from '../utils/constants'
import ChannelVideos from '../components/ChannelVideos'

const ChannelScreen = () => {
  const { channelId } = useParams()
  const path = `channels?part=snippet%2CbrandingSettings%2Cstatistics&id=${channelId}&key=${API_KEY}`
  const { data, isLoading, isPending ,isError } = useFetchQuery(path)
  console.log(data, ' channelScreen')
  const channelData = data?.items[0]

  if (isLoading || isPending) {
    // Consider using a loading spinner for a better user experience
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <div className=' w-full max-[768px]:w-full max-[768px]:m-0 mx-auto'>
            <ChannelThumbnails url={channelData.brandingSettings.image.bannerExternalUrl} />
            <ChannelDetails 
            channelUserName= {channelData.snippet.customUrl}
            title={channelData.snippet.title}
            statistics = {channelData.statistics}
            description={channelData.snippet.description}
            channelProfileImg={channelData.snippet.thumbnails  }
            />
            <ChannelVideos channelId={channelId}/>
    </div >
  )
}

export default ChannelScreen