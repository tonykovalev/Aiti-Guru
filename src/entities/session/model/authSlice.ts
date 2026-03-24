import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "./types";
import { tokenRefreshed, authFailed } from "@/shared/api";

const initialState: AuthState = {
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ accessToken: string; user: User }>,
    ) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    logout: state => {
      state.accessToken = null;
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(tokenRefreshed, (state, action) => {
        state.accessToken = action.payload;
      })
      .addCase(authFailed, state => {
        authSlice.caseReducers.logout(state);
      });
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
