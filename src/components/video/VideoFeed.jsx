import { useAppContext } from "../../context/App/AppContextProvider";
import { addToHistory } from "../../context/action";
import useFireStore from "../../hooks/useFireStore";
import transformDataFn from "../../utils/transformDataFn";
import Video from "./Video";

const VideoFeed = ({ videos }) => {
  const { state, dispatch } = useAppContext();
  const { email } = state.user;
  const { addData } = useFireStore(email);

  const handAddleHistory = (video) => {
    const findData = state.history.find((vd) => vd.id === video.id);
    if (!findData) {
      dispatch(addToHistory(video));
      addData({ data: video, collectionName: email });
    }
  
  };
  
const data = transformDataFn(videos)
  return (
    <>
      {data?.map((item) => (
        <div
          onClick={() => handAddleHistory(item)}
          key={item.videoId}
          className="col-span-4"
        >
          <Video key={item.videoId} video={item} />
        </div>
      ))}
    </>
  );
};

export default VideoFeed;
