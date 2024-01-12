import Video from "./Video";


const VideoFeed = ({ videos, handleHistory }) => {
  console.log(videos)
  return (
    <>
      {videos?.map((item) => (
        <div
          onClick={() => handleHistory(item)}
          key={item.videoId}
          className="col-span-4"
        >
          <Video key={item.videoId} video={item} />
        </div>
      ))}
    </>
  );
};

export default VideoFeed