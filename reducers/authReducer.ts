import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { IAuth } from "../interfaces";
import { AppState } from "../store";

interface AuthAction {
  payload: IAuth;
}

interface TokenAction {
  payload: string;
}

const initialState: IAuth = {
  logged: false,
  user: null,
  accessToken: "",
};

const authSlice = createSlice({
  name: "[AUTH]",
  initialState,
  reducers: {
    login: (state: IAuth) => {
      state.logged = true;
    },
    logout: (state: IAuth) => {
      state.logged = false;
    },
    setAccessToken: (state: IAuth, action: TokenAction) => {
      state.accessToken = action.payload;
    },
    setUser: (state: IAuth, action: AuthAction) => {
      state.user = action.payload.user;
    },
  },
});

export { authSlice };

// Actions
export const { login, logout, setAccessToken, setUser } = authSlice.actions;

// Selector to access to the store
export const selectAuth = (state: AppState) => state.auth;

export default authSlice.reducer;
