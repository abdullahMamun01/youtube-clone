import { ADD_TO_HISTORY, SEARCH, SET_VIDEOS } from "./actionType";

export const searchVideos = (searchQuery ) => {
    return {
        type: SEARCH,
        payload: searchQuery
    };
};

export const addToHistory = (video) => {
    return {
        type: ADD_TO_HISTORY,
        payload: video
    };
};


export const setData = (video) => {
    return {
        type: SET_VIDEOS,
        payload: video
    };
};