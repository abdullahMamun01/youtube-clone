import { Outlet } from "react-router-dom";
import Video from "../components/video/Video";

import useFireStore from "../hooks/useFireStore";
import WatchHistoryError from "../components/error/WatchHistoryError";
import { useContext, useEffect } from "react";

import { AuthContext, VideoHistoryContext } from "../contexts";
import { useAuthContext } from "../hooks/context/useAuthcontext";

const VideoHistory = () => {
  const { user } = useAuthContext();

  const { data } =   useFireStore(user?.email);

  // const {VideoHistory,initialSetVideoHistory} = useContext(VideoHistoryContext)

  // useEffect(() => {
  //   let ignore = false
  //   if (data && !ignore) {
  //     initialSetVideoHistory(data)
  //   }
  //   return () =>{
  //     ignore = true
  //   }
  // }, [data]);

  let historyVideo ="hello";
  if (data) {
    historyVideo =
    data.length === 0 ? (
        <span className="">This list has no videos.</span>
      ) : (
        <div className="grid md:grid-cols-12 gap-3">
          
          {data.map((video) => (
            <div
              className="col-span-4 "
              key={video.videoId}
            >
              <Video video={video} />
            </div>
          ))}
        </div>
      );
  } else {
    historyVideo = <WatchHistoryError />;
  }

  return <div className="text-secondary">

    {historyVideo}
    </div>;
};

export default VideoHistory;
