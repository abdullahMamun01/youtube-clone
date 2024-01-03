import React from 'react'
import ReactPlayer from 'react-player'

const  VideoPlay = ({url}) =>  {

  return (

    <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
    <ReactPlayer
      url={url}
      controls={true}
      width='100%'
      height='100%'
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  </div>
  )
}

export default VideoPlay