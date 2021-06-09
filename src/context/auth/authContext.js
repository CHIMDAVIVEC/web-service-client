import React, { createContext, useReducer, useCallback } from "react";
import userReducer from "./authReducer";
import * as types from "./authActionTypes";
import axios from "axios";

const initialAuthState = {
  loading: false,
  error: false,
  token: null,
  errResponse: null,
};

export const AuthContext = createContext(initialAuthState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialAuthState);

  const AuthReset = () => {
    dispatch({
      type: types.AUTH_RESET,
    });
  };

  const LoginAction = useCallback(async (data) => {
    dispatch({
      type: types.AUTH_START,
    });
    try {
      const res = await axios.post(`http://localhost:8080/users/${data.login}`, data);
      if (res.data.message === "authorized") localStorage.setItem("howard_shores", data.login);
      dispatch({
        type: types.AUTH_SUCCESS,
        payload: res.data.access_token,
      });
    } catch (error) {
      dispatch({
        type: types.AUTH_FAILURE,
        payload: error.response.data.error_msg,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        AuthReset,
        LoginAction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
