import * as videoActionTypes from "../actions/VideoActionTypes";

const initialState = {
  videos: [],
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case videoActionTypes.FETCH_VIDEOS_SUCCESSFULLY:
      return {
        ...state,
        videos: action.videos,
        error: null
      };
    case videoActionTypes.FAILURE_TO_FETCH_VIDEOS:
      return {
        ...state,
        videos: [],
        error: action.error
      };
    default:
      return state;
  }
}

export default reducer;
