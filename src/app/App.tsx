import { useState } from "react";
import { Toaster } from "sonner";
import { AppRouter } from "./providers/router";
import { useAppDispatch } from "@/shared/store";
import { tokenRefreshed } from "@/shared/api";
import { getRememberMe, getToken } from "@/shared/lib";

const App = () => {
  const dispatch = useAppDispatch();
  useState(() => {
    if (getRememberMe()) {
      const token = getToken();
      if (token) dispatch(tokenRefreshed(token));
    }
  });

  return (
    <>
      <Toaster position="top-right" />
      <AppRouter />
    </>
  );
};

export default App;
