import * as types from "./userActionTypes";

export default (state, action) => {
  switch (action.type) {
    case types.USER_START:
      return {
        ...state,
        loading: true,
        message: null,
        user: null,
        error: null,
      };

    case types.GET_LOGGED_IN_USER:
      return {
        ...state,
        loading: false,
        me: action.payload,
      };

    case types.USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload,
      };

    case types.USER_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: "",
        message: null,
      };

    default:
      return state;
  }
};
