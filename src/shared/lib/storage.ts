// В production accessToken хранился бы только в памяти (Redux),
// а refreshToken приходил бы в HttpOnly cookie от сервера.
// dummyjson не поддерживает HttpOnly cookies (CORS),
// поэтому при rememberMe=true сохраняем токен в localStorage как компромисс.

const REMEMBER_ME_KEY = "rememberMe";
const ACCESS_TOKEN_KEY = "accessToken";

export const saveRememberMe = (value: boolean): void => {
  if (value) {
    localStorage.setItem(REMEMBER_ME_KEY, "true");
  } else {
    localStorage.removeItem(REMEMBER_ME_KEY);
  }
};

export const getRememberMe = (): boolean => {
  return localStorage.getItem(REMEMBER_ME_KEY) === "true";
};

export const clearRememberMe = (): void => {
  localStorage.removeItem(REMEMBER_ME_KEY);
};

export const saveToken = (token: string): void => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const clearToken = (): void => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};
