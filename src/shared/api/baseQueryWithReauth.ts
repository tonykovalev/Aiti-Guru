import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { baseQuery } from "./baseQuery";
import { isRefreshResponse } from "./guards";
import { tokenRefreshed, authFailed } from "./authEvents";

export const baseQueryWithReauth: BaseQueryFn = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401 && args.url !== "/auth/refresh") {
    const refreshResult = await baseQuery(
      { url: "/auth/refresh", method: "POST" },
      api,
      extraOptions,
    );

    if (refreshResult.data && isRefreshResponse(refreshResult.data)) {
      api.dispatch(tokenRefreshed(refreshResult.data.accessToken));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(authFailed());
    }
  }

  return result;
};
