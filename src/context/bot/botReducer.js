import * as types from "./botActionTypes";

export default (state, action) => {
  switch (action.type) {
    case types.BOT_START:
      return {
        ...state,
        loading: true,
        message: null,
        bot: null,
        error: null,
      };

    case types.BOT_SUCCESS:
      return {
        ...state,
        loading: false,
        bots: action.payload,
      };

    case types.BOT_ADD:
      return {
        ...state,
        bots: [action.payload, ...state.bots],
        loading: false,
        error: false,
        errResponse: "",
        message: "Бот успешно добавлен!",
      };

    case types.BOT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload,
      };

    case types.BOT_RESET:
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
