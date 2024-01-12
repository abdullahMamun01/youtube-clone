import { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

import LoadingSkeleton from "../ui/skeleton/LoadingSkeleton";
import Video from "./Video";
import fetchFromApi from "../../utils/fetchFromApi";
import transformDataFn from "../../utils/transformDataFn";
import { API_KEY } from "../../utils/constants";
import { useAppContext } from "../../context/App/AppContextProvider";
import ErrorMessage from "../error/ErrorMessage";
import { addToHistory } from "../../context/action";
import VideoFeed from "./VideoFeed";

const queryFn = async (pageParam, selectSearch) => {
  const params = {
    part: "snippet",
    maxResults: 9,
    q: selectSearch,
    pageToken: pageParam,
    key: API_KEY,
  };

  if (pageParam === undefined)
    throw Error("in valid pageParam or api key is expire");
  try {
    const data = await fetchFromApi("/search", params);
    return data;
  } catch (error) {
    console.error(error);
    throw Error(error); // Ensure the error is thrown to be captured by React Query
  }
};

export default function VideoLists() {
  const { state, dispatch } = useAppContext();
  let selectSearch = state.search || "All";

  const { data, error, isError, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteScroll(
      ["yt-videos", selectSearch],
      "",
      async ({ pageParam }) => queryFn(pageParam, selectSearch),
      transformDataFn
    );
  const queryPages = data?.pages;
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log("loading...........");
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const handleHistory = (video) => {
    console.log(video, " history");
    dispatch(addToHistory(video));
  };

  console.log(state, " db.........");
  return (
    <div className="w-full">
      {isError && <ErrorMessage message={error} />}
      <div className="grid  md:grid-cols-12 w-full ">
        {/* api data render */}
        {queryPages?.map((videos) => (
          <VideoFeed
            key={videos.etag}
            videos={videos.items}
            handleHistory={handleHistory}
          />
        ))}

        {/* skeleton  */}
        {isFetching && <LoadingSkeleton />}
      </div>
      <button disabled={isFetching} ref={ref}></button>
    </div>
  );
}
