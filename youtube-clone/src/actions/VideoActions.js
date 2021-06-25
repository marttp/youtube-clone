import * as videoService from "../services/VideoService";

import * as loadingActionTypes from "./LoadingActionTypes";
import * as videoActionTypes from "./VideoActionTypes";

export const fetchVideos = () => async (dispatch) => {
  try {
    dispatch({ type: loadingActionTypes.SHOW_LOADING });
    const videos = await videoService.fetchVideos();
    if (videos && videos.length !== 0) {
      dispatch({ type: videoActionTypes.FETCH_VIDEOS_SUCCESSFULLY, videos });
    }
    dispatch({ type: loadingActionTypes.HIDE_LOADING });
  } catch (error) {
    dispatch({ type: videoActionTypes.FAILURE_TO_FETCH_VIDEOS, error });
    dispatch({ type: loadingActionTypes.HIDE_LOADING });
  }
};
