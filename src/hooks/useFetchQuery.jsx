import {  keepPreviousData, useQuery } from "@tanstack/react-query"

const useFetchQuery = (queryKey ,fetchFunction ) => {
    const { isPending, isLoading, isError, data, error, isFetched } = useQuery({
        queryKey: queryKey,
        queryFn:  fetchFunction,
        staleTime: Infinity,
        placeholderData : keepPreviousData
    })
    return {
        data,
        isPending,
        isError,
        error,
        isLoading,
        isFetched
    }
}


export default useFetchQuery