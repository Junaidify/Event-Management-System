import { API_FETCH } from "../constant/actionTypesl";
import { initialState } from "../constant/initialState";

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_FETCH.LOADING:
      return {
        ...state,
        loading: true,
      };
    case API_FETCH.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case API_FETCH.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
