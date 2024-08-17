const loginInitialState = {
  loading: false,
  error: false,
  login: localStorage.getItem("username") || [],
};

export const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case "LOGIN_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        login: action.payload,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
