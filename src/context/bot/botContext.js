import React, { createContext, useReducer, useCallback } from "react";
import botReducer from "./botReducer";
import * as types from "./botActionTypes";
import axios from "axios";

const initialBotState = {
  loading: false,
  error: false,
  bots: [],
  bot: null,
  errResponse: "",
  message: null,
};

export const BotContext = createContext(initialBotState);

export const BotProvider = ({ children }) => {
  const [state, dispatch] = useReducer(botReducer, initialBotState);

  const BotReset = () => {
    dispatch({
      type: types.BOT_RESET,
    });
  };

  const fetchBots = useCallback(async (login) => {
    dispatch({
      type: types.BOT_START,
    });
    try {
      const res = await axios.get(`http://localhost:8080/bots/${login}`);
      console.log(res);
      dispatch({
        type: types.BOT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: types.BOT_FAILURE,
        payload: error.response.data.error_msg,
      });
    }
  }, []);

  const addBot = useCallback(async (data) => {
    dispatch({
      type: types.BOT_START,
    });
    try {
      const res = await axios.post("http://localhost:8080/bots", data);
      dispatch({
        type: types.BOT_ADD,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: types.BOT_FAILURE,
        payload: error.response.data.error_msg,
      });
    }
  }, []);

  return (
    <BotContext.Provider
      value={{
        state,
        addBot,
        BotReset,
        fetchBots,
      }}
    >
      {children}
    </BotContext.Provider>
  );
};
