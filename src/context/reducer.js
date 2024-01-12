
import { ADD_TO_HISTORY, SEARCH, SET_VIDEOS } from "./actionType";


const reducer = (state , action) => {
    switch (action.type) {
      case SET_VIDEOS : {
        return {
          ...state ,
          history : action.payload
        }
      }
      case ADD_TO_HISTORY: {
        const isVideoInHistory = state.history.some(video => video.videoId === action.payload.videoId);
       
        return {
          ...state,
          history: isVideoInHistory ? state.history : [...state.history , action.payload],
        };
      }
      case SEARCH : {
            return {
                ...state ,
                search : action.payload
            }
      }
  
      default:
        return [];
    }
  };
  



export default reducer