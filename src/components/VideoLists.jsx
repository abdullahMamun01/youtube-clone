import React, { useContext, useEffect, useState } from 'react'
import useFetchQuery from '../hooks/useFetchQuery'
import Skeleton from './ui/Skeleton'
import Video from './Video'
import { useSearchContext } from '../hooks/useSearchContext'
import { useInView } from 'react-intersection-observer'

import fetchFromApi from '../utils/fetchFromApi'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import transformDataFn from '../utils/transformDataFn'



export default function VideoLists() {
  const { search } = useSearchContext()
  let selectSearch = search ? search : 'All'
  const queryFn = async ({ pageParam }) => {
    if(pageParam === undefined) throw Error('in valid pageParam or api key is expire')
    try {
      const data = await fetchFromApi(`/search?part=snippet&maxResults=9&pageToken=${pageParam}&q=${selectSearch}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`);
      return data;
    } catch (error) {
      console.error(error);
      throw Error(error); // Ensure the error is thrown to be captured by React Query
    }
  };
  

  const { data,error,fetchNextPage,hasNextPage,isFetching,isFetchingNextPage,status, } = useInfiniteScroll('yt-api', selectSearch, '', queryFn, transformDataFn)
  const queryPages = data?.pages
  console.log(data)

  const { ref, inView } = useInView()
  
  useEffect(() =>{
    if(inView && hasNextPage){
      fetchNextPage()
    }
  },[fetchNextPage ,inView])
  
  return (
    <div className='w-full'>
      {
        error  && <div>
          <h2>{error.message}</h2>
        </div>
      }
      <div className={`grid  md:grid-cols-12 w-full `}>
        {/* skeleton  */}

        {
         isFetching && [...new Array(12)].map((item) => (
            <div className='col-span-4'>
              <Skeleton key={item} />
            </div>))
        }

        {/* api data render */}
        {
          queryPages?.map(videos =>(
            videos ? videos?.items?.map(item => (
              <div className=' col-span-4'>
                <Video key={item.videoId} video={item} />
              </div>
            ))
            :
            <div className='col-span-12 my-6'>
              Loading....
            </div>
          ))
        }


       
      </div>
      <button disabled={isFetching} ref={ref}>
        
      </button>
    </div>
  )
}
