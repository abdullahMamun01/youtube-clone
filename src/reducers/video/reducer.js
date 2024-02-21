import {
  ADD_TO_HISTORY,
  SET_VIDEOS,
} from "./actionType";

/* 
initial state schema 
const initialState = []

*/
const reducer = (state, action) => {
  switch (action.type) {
    case SET_VIDEOS: {
      return  action.payload
    }
    case ADD_TO_HISTORY: {
      const isVideoInHistory = state.history.some(
        (video) => video.videoId === action.payload.videoId
      );
        
      return isVideoInHistory ? state :  [...state, action.payload]
    }
    default:
      return state;
  }
};

export default reducer;
