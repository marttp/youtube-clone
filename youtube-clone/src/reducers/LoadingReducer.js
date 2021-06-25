import * as loadingActionTypes from "../actions/LoadingActionTypes";

const initialState = {
  loading: false
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case loadingActionTypes.SHOW_LOADING:
      return {
        loading: true
      };
    case loadingActionTypes.HIDE_LOADING:
      return {
        loading: false
      };
    default:
      return state;
  }
}

export default reducers;
