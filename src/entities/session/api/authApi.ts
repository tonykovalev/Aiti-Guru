import { api } from "@/shared/api";
import type { User } from "../model/types";

interface LoginRequest {
  username: string;
  password: string;
  expiresInMins?: number;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  id: User["id"];
  username: User["username"];
}

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: credentials => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
