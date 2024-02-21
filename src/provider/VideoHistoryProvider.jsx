import React, { useReducer } from 'react'

import { addToHistory, setVideos } from '../reducers/video/action'
import reducer from '../reducers/video/reducer'
const VideoHistoryProvider = ({children}) => {
  const [videoHistory,dispatch] = useReducer(reducer , [])

  const handleAddVideo = (video) => {
    dispatch(addToHistory(video))
  }

  const handleInitialSetVideoHistory = (video) => {
    dispatch(setVideos(video))
  }

  const state  = {videoHistory , handleAddVideo, handleInitialSetVideoHistory}
  return (
    <VideoHistoryContext.Provider value={{...state}}>
        {children}
    </VideoHistoryContext.Provider>
  )
}

export default VideoHistoryProvider