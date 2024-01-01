import React from 'react'
import ReactPlayer from 'react-player'

const  VideoPlay = ({url}) =>  {
  return (
    <div className='w-full h-full'>
        <ReactPlayer width={800} height={400}  url={url}  />
    </div>
  )
}

export default VideoPlay