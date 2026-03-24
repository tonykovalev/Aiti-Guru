export const isRefreshResponse = (
  data: unknown,
): data is { accessToken: string } => {
  return (
    typeof data === "object" &&
    data !== null &&
    "accessToken" in data &&
    typeof (data as { accessToken: unknown }).accessToken === "string"
  );
};
