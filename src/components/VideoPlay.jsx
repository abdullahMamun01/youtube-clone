import React from 'react'
import ReactPlayer from 'react-player'

const  VideoPlay = ({url}) =>  {

  return (

    <div  className='w-full ' >
        <ReactPlayer
        url={url}
        controls={true}
        width='full'
        height="full"
     
        />
    </div>
  )
}

export default VideoPlay