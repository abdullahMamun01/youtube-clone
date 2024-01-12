import React from 'react'

import { Link } from 'react-router-dom'
import getDateDifference from '../../utils/getDatePart '


const Video = ({ video }) => {
  const { videoId, title, thumbnails, channelName, publishedAt } = video
  const titleSplit = title.slice(0, 66)
  const dateDifference = getDateDifference(publishedAt)

  

  return (
    <div role="status" className="w-full p-2 max-[768px]:p-0 my-2 dark:border-gray-700 cursor-pointer">
      <Link to={`/video/${videoId}`}>

          <figure className="max-w-lg">
            <img className="w-full h-[210px] md:w-[320px] md:h-[180px]  object-cover md:rounded-md hover:rounded-none " src={thumbnails.high.url} alt="image description"
              
            />

          </figure>

        <div className='flex flex-row'>
          <div className="basis-[100%] my-2 max-[768px]:px-4">
            {/* video title */}
            <h2 className='text-secondary  font-bold text-xl max-[768px]:text-lg leading-[28px]'>{titleSplit}</h2>

            <div className='flex gap-1'>
              {/* <h6 className='text-[#606060] m-1'>{channelName}</h6> */}
              <h6 className='text-sky font-semibold text-lg m-1 max-[768px]:text-[12px]'>{channelName}</h6>

              <small className='my-auto text-gray m-1 max-[768px]:text-sm'>{dateDifference}</small>
            </div>
          </div>

        </div>
      </Link>

    </div>
  )
}
export default Video

