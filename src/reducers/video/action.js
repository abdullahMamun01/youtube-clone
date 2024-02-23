import { ADD_TO_HISTORY, SEARCH, SET_VIDEOS, USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionType";

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


export const setVideos = (video) => {
    return {
        type: SET_VIDEOS,
        payload: video
    };
};

