import { useInfiniteQuery } from "@tanstack/react-query";



/* 
const params = {
    part: "snippet",
    maxResults: 9,
    q: selectSearch,
    pageToken: pageParam,
    key: API_KEY,
  };

*/
const useInfiniteScroll = (
  queryKeys,
  fetchDataFn
) => {

  const {
    data,
    error,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading ,
    isFetchingNextPage,

} = useInfiniteQuery({
    queryKey: queryKeys,
    queryFn:  fetchDataFn,
    initialPageParam: '',
    getNextPageParam: (lastPage) => {
      return lastPage.nextPageToken  ;
    },

  });
  return {
    data,
    error,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching ,
    isFetchingNextPage,
    isLoading
  };
};

export default useInfiniteScroll;

