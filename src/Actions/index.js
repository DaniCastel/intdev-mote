export const login = (userInfo, history) => ({
  type: "LOGIN_SAGA",
  userInfo: userInfo,
  history: history
});

export const getLoginURL = () => ({
  type: "GET_LOGIN_URL_SAGA"
});

export const loginOffice365 = code => ({
  type: "LOGIN_OFFICE365_SAGA",
  code: code
});

export const logout = history => ({
  type: "LOGOUT_SAGA",
  history: history
});
