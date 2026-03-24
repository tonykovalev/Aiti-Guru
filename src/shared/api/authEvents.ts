import { createAction } from "@reduxjs/toolkit";

export const tokenRefreshed = createAction<string>("auth/tokenRefreshed");
export const authFailed = createAction("auth/authFailed");
