import React, { useState } from 'react'
import LikeIcon from './ui/LikeIcon'
import DislikeIcon from './ui/DislikeIcon'
import getDateDifference from '../utils/getDatePart '


const VideoComment = ({ imgUrl, reply, publishedAt, authorDisplayName }) => {
  const replyTime = getDateDifference(publishedAt)

  return (
    <div className=' my-3 py-3 flex gap-1'>
      

      {/* author profile image */}
      <img className='rounded-full w-[40px]  h-[40px] mr-4' src={imgUrl} alt="" />

      {/* author comments and details */}
      <div className='truncate'>
        <h3 className='font-bold text-gray-800 text-[13px] mb-1.5 '>
          {authorDisplayName}
          <span className='ml-1 text-gray-500 text-[12px]'>
            {replyTime}
          </span>
        </h3>
        <p className='text-[14px] leading-[21px]  text-pretty '>
          {reply}

        </p>
        <div className='flex gap-2 mt-5'>
          <LikeIcon />
          <DislikeIcon />
        </div>
      </div>
    </div>
  )
}

export default VideoComment