import React from 'react'
import { formatSubscribersCount } from '../../utils/formatSubscribersCount'

const ChannelDetails = ({title, channelUserName ,statistics ,channelProfileImg,description }) => {
    const {subscriberCount} = statistics
    const subscribers = formatSubscribersCount(subscriberCount)
    return (
        <div className='my-5 grid grid-cols-12 w-full  max-[768px]:gap-2 gap-2'>
            {/* channel logo */}
            <div className='max-[768px] col-span-3 row-span-6 max-[768px]:row-span-1'>
                <img className='rounded-full max-[768px]:w-[72px] max-[768px]:h-[72px] w-[160px] h-[160px] my-auto mx-auto'
                 src={channelProfileImg.medium.url} alt=""
                />
            </div>

            {/* channel Details */}
            <div className='max-[768px]: col-span-9'>
                <h1 className='text-[36px] max-[768px]:text-[24px] text-secondary font-bold'>
                    {title}
                    {/* <span className='max-[768px]:block mx-2'></span> */}
                 
                    </h1>
                <span className='text-[15px] max-[768px]:text-[12px] mx-2 my-3 text-gray font-semibold'>
                   {channelUserName}
                </span>
                <span className='text-[15px] max-[768px]:text-[12px] my-4 text-gray mx-2 font-semibold'>{subscribers} subscribers</span>

                <span className='text-[15px]  max-[768px]:text-[12px] block my-1 text-gray mx-2 font-semibold '>{description.slice(0,40)}...</span>
            </div>
            <button className='bg-secondary col-span-2 max-[768px]:col-span-12 my-3  text-neutral font-semibold rounded-[20px] px-5 py-2'>subscriber</button>
        </div>
    )
}

export default ChannelDetails