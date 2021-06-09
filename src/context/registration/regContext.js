import React, { createContext, useReducer, useCallback } from "react";
import * as types from "./regActionTypes";
import userReducer from "./regReducer";
import axios from "axios";

const initialRegistrationState = {
  loading: false,
  error: false,
  success: false,
  errResponse: null,
};

export const RegistrationContext = createContext(initialRegistrationState);

export const RegistrationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialRegistrationState);
  const RegAction = useCallback(async (data) => {
    dispatch({
      type: types.REG_START,
    });
    try {
      await await axios.post(`http://localhost:8080/users`, data);
      dispatch({
        type: types.REG_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: types.REG_FAILURE,
        payload: error.response.data.error_msg,
      });
    }
  }, []);

  return (
    <RegistrationContext.Provider
      value={{
        state,
        RegAction,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
