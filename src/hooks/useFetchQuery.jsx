import {  keepPreviousData, useQuery } from "@tanstack/react-query"
import instance from "../utils/axios"


const fetchFromApi = async (url) => {
    try {
     const { data } = await instance.get(url)
     return data
    } catch (error) {
     console.log(err.message)
    }
 }
const useFetchQuery = (path) => {
    const { isPending, isLoading, isError, data, error, isFetched } = useQuery({
        queryKey: ['yt-videos', path],
        queryFn: async () => fetchFromApi(path),
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