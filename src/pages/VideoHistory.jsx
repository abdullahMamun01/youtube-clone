import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/App/AppContextProvider";
import Video from "../components/video/Video";


const VideoHistory = () => {
  const { state } = useAppContext();
console.log(state)
  return (
    <div className="grid md:grid-cols-12 gap-3">
      {state.history.map((video) => (
        <div className="col-span-4 border border-y-gray">
          <Video key={video.videoId} video={video} />
        </div>
      ))}
    </div>
  );
};

export default VideoHistory;
