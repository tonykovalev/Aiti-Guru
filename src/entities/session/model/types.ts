export interface User {
  id: number;
  username: string;
}

export interface AuthState {
  accessToken: string | null;
  user: User | null;
}
