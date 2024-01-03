import React from 'react'

const ChannelThumbnails = ({url}) => {
  const backgroundImageUrl = `https://yt3.googleusercontent.com/mVv3E3vmZG0ci3jMLvKj__a6IF8WaCnbNqbBNtt-5Ko8PCtkoZp8lfOwWpKnLhVKpGn0wGpt`

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