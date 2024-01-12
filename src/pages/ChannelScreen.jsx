import React from 'react'

import { useParams } from 'react-router-dom'
import useFetchQuery from '../hooks/useFetchQuery'
import { API_KEY } from '../utils/constants'
import fetchFromApi from '../utils/fetchFromApi'
import ChannelThumbnails from '../components/channel/ChannelThumbnails'
import ChannelVideos from '../components/channel/ChannelVideos'
import ChannelDetails from '../components/channel/ChannelDetails'

const ChannelScreen = () => {
  const { channelId } = useParams()
  const params = {
    part: 'snippet,statistics,brandingSettings',
    id: channelId,
    key: API_KEY,
  };

  const { data, isLoading, isPending, isError, isFetched } = useFetchQuery(['yt-videos', params],async () => fetchFromApi('/channels', params))
  
  if (isLoading || isPending || !isFetched) {
    // Consider using a loading spinner for a better user experience
    return <div className='text-secondary'>Loading....</div>;
  }

  if (isError) {
    return <div className='text-secondary'>Error loading data</div>;
  }

  const channelData = data?.items[0]
  console.log(data, ' channelScreen')
  console.log(channelData.brandingSettings)

  return (
    <div className=' w-full max-[768px]:w-full max-[768px]:m-0 mx-auto'>
      {channelData.brandingSettings.image && <ChannelThumbnails url={channelData.brandingSettings.image.bannerExternalUrl} />}
      <ChannelDetails
        channelUserName={channelData.snippet.customUrl}
        title={channelData.snippet.title}
        statistics={channelData.statistics}
        description={channelData.snippet.description}
        channelProfileImg={channelData.snippet.thumbnails}
      />
      <h1 className='text-[22px] my-2 text-secondary font-semibold '>All videos</h1>
      <ChannelVideos channelId={channelId} />
    </div >
  )
}

export default ChannelScreen