export const login = (payload, history) => ({ type: 'LOGIN_REQUEST', payload });

export const loginSuccess = (payload, history) => ({ type: 'LOGIN_SUCCESS', payload });

export const logout = (payload, history) => ({ type: 'LOGOUT', payload });
