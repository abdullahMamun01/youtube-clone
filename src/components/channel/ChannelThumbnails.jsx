import React from 'react'

const ChannelThumbnails = ({url}) => {
 
  const divStyle = {
    background: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover' ,
    
    margin: '0 auto'
    // Add other background properties if needed
  };
  return (
    <div className=' w-full  h-[120px] opacity-70 rounded-lg' style={divStyle}>
    </div>
  )
}

export default ChannelThumbnails