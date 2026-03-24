import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "@/shared/lib";

export const useProductSearch = (debounceTime: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") ?? "");
  const debouncedValue = useDebounce(value, debounceTime);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setSearchParams(prev => {
      if (debouncedValue) {
        prev.set("q", debouncedValue);
      } else {
        prev.delete("q");
      }
      prev.set("page", "1");
      return prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return { value, setValue };
};
