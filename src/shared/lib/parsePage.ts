export const parsePage = (
  searchParams: URLSearchParams,
): { page: number; rawPage: number } => {
  const rawPage = Number(searchParams.get("page"));
  const page = Number.isFinite(rawPage) && rawPage >= 1 ? rawPage : 1;
  return { page, rawPage };
};
