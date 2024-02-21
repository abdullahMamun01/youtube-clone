import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import LoadingSkeleton from "../ui/skeleton/LoadingSkeleton";
import fetchFromApi from "../../utils/fetchFromApi";
import transformDataFn from "../../utils/transformDataFn";
import { API_KEY } from "../../utils/constants";
import ErrorMessage from "../error/ErrorMessage";

import Video from "./Video";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelectCategoryContext } from "../../hooks/context/useSelectCategoryContext";

import { useSearchContext } from "../../hooks/context/useSearchContext";

const VideoLists = () => {
  const {selectCategory} = useSelectCategoryContext()
  const {searchTerm} = useSearchContext()
  let search = searchTerm || selectCategory || "";

  //custom tanstack query infinite hook
  const { data, error, isError, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteScroll(
      ["yt-videos", search],
      async ({ pageParam }) =>
        await fetchFromApi("/search", {
          part: "snippet",
          maxResults: 9,
          q: search,
          pageToken: pageParam,
          key: API_KEY,
        })
    );

  //data from useInfiniteQuery hook
  const videoList = data?.pages.reduce(
    (acc, curr) => [...acc, ...curr.items],
    []
  );
  //transform data
  const transformData = transformDataFn(videoList);

  console.log("loading...........");
  return (
    <div className="w-full">
      {isError && <ErrorMessage message={error} />}
      
      <InfiniteScroll
        dataLength={transformData ? transformData.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
      >
        <div className="grid  md:grid-cols-3 w-full ">
          {/* api data render */}
          {transformData?.map((video) => (
            <div key={video?.vdID} className="col-span-1">
              <Video video={video} />
            </div>
          ))}

        {isFetching && <LoadingSkeleton />}

        </div>
      </InfiniteScroll>
    </div>
  );
};

export default VideoLists;
