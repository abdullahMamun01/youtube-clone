import { useInfiniteQuery } from "@tanstack/react-query"

// fetchData(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&pageToken=${pageParam}&q=${selectSearch}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`

const useInfiniteScroll = (name, key, initialParam, fetchDataFn, transformDataFn) => {
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status, } = useInfiniteQuery({
    queryKey: [name, key],
    queryFn: async (arg) => await fetchDataFn(arg),
    initialPageParam: initialParam,
    select: (data) => {
      return  {
        pages: data.pages.map(item => ({
          ...item,
          items: transformDataFn(item.items)
        })),
        pageParams: [...data.pageParams]
      }

    },
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nextPageToken 
    } ,
    staleTime :Infinity


  })
  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  }
}


export default useInfiniteScroll



/* 
[
  {
    pages: [] ,

    pageParam : []
  }
]


*/