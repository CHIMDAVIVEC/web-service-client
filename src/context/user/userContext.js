import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import userReducer from "./userReducer";
import * as types from "./userActionTypes";
import ClientAPI from "../apiUtils";

const initialUserState = {
  loading: false,
  error: false,
  user: null,
  me: null,
  errResponse: "",
  message: null,
};

export const UserContext = createContext(initialUserState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const UserReset = () => {
    dispatch({
      type: types.USER_RESET,
    });
  };

  const fetchLoggedInUser = useCallback(async () => {
    dispatch({
      type: types.USER_START,
    });
    try {
      const res = await ClientAPI.get("/user/me");
      dispatch({
        type: types.GET_LOGGED_IN_USER,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: types.USER_FAILURE,
        payload: error.response.data.error_msg,
      });
    }
  }, []);

  useEffect(() => {
    fetchLoggedInUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        state,
        UserReset,
        fetchLoggedInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
