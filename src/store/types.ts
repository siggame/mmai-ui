// Create an interface for UserInfo
export interface UserInfo {
  username: string;
  email: string;
}

// Create a State interface for TypeScript type-checking
export interface State {
  isLoading: boolean;
  userFound: boolean;
  userInfo: UserInfo | {};
  error: boolean;
  errorMessage: string;
}
