import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const useInfiniteScroll = (queryKeys,initialParam,fetchDataFn,transformDataFn) => {
  const memoizedTransformDataFn = useMemo(() => transformDataFn, []);
  const {
    data,
    error,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status} = useInfiniteQuery({
    queryKey: queryKeys,
    queryFn: async (arg) => await fetchDataFn(arg),
    initialPageParam: initialParam,
    select: (data) => {
      return {
        pages: data.pages.map((item) => ({
          ...item,
          items: memoizedTransformDataFn(item.items),
        })),
        pageParams: [...data.pageParams],
      };
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextPageToken;
    },
    staleTime: Infinity,
  });
  return {
    data,
    error,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};

export default useInfiniteScroll;

/* 
[
  {
    pages: [] ,

    pageParam : []
  }
]


*/
