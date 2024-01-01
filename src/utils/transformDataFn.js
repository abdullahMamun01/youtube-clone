
// const transformDataFn = (items) => {
//   return items?.reduce((acc, curr) => {
//     const video = {}
//     video.nextPageToken = data.nextPageToken
//     video.region = data.regionCode
//     video.videoId = curr.id.videoId
//     video.publishedAt = curr.snippet.publishedAt
//     video.channelId = curr.snippet.channelId
//     video.title = curr.snippet.title
//     video.description = curr.snippet.description
//     video.thumbnails = curr.snippet.thumbnails
//     video.channelName = curr.snippet.channelTitle
//     video.liveBroadcastContent = curr.snippet.liveBroadcastContent

//     acc.push(video)
//     return acc
//   }, [])
// }
const transformDataFn = (items) => {
  return items?.reduce((acc, curr) => {
    const video = {}

    if (curr?.id?.videoId) {
      video.videoId = curr?.id?.videoId;
      video.publishedAt = curr?.snippet.publishedAt
      video.channelId = curr?.snippet.channelId
      video.title = curr?.snippet.title
      video.description = curr?.snippet.description
      video.thumbnails = curr?.snippet.thumbnails
      video.channelName = curr?.snippet.channelTitle
      video.liveBroadcastContent = curr?.snippet.liveBroadcastContent
      acc.push(video)
    }

    
    return acc
  }, [])
}

export default transformDataFn