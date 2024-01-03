import React from 'react'
import getDateDifference from '../utils/getDatePart '
import { Link } from 'react-router-dom'

const  Video = ({ video }) => {
  const {videoId, title, thumbnails, channelName, publishedAt } = video
  const titleSplit = title.slice(0, 66)
  const dateDifference = getDateDifference(publishedAt)
 
  return (
    <div role="status" className="max-w-sm p-2  rounded  md:p-3 dark:border-gray-700 cursor-pointer">
      <Link to={`/video/${videoId}`}>
        
          <img className='rounded-lg w-full h-full' src={thumbnails.medium.url} alt="" />
  
        <div className='flex flex-row'>
          <div className="basis-[100%] my-2">
            <h2 className='text-[#0f0f0fde] font-bold text-[16px] leading-[28px]'>{titleSplit}</h2>

            <div className='flex gap-1'>
              {/* <h6 className='text-[#606060] m-1'>{channelName}</h6> */}
              <h6 className='text-sky-600 font-md m-1'>{channelName}</h6>

              <small className='my-auto text-[#606060] m-1'>{dateDifference}</small>
            </div>
          </div>

        </div>
      </Link>

    </div>
  )
}
export default Video

