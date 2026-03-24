export const getPageRange = (current: number, total: number): number[] => {
  let start: number;
  if (current <= 2) {
    start = 1;
  } else if (current >= total - 1) {
    start = Math.max(1, total - 4);
  } else {
    start = current - 2;
  }
  const end = Math.min(start + 4, total);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};
