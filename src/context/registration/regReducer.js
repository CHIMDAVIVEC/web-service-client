import * as types from './regActionTypes';

export default (state, action) => {
  switch (action.type) {
    case types.REG_START:
      return {
        ...state,
        error: false,
        loading: true
      };

    case types.REG_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        success: true
      };

    case types.REG_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        errResponse: action.payload
      };

    default:
      return state;
  }
};
