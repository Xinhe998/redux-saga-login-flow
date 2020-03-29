const userInitialState = {
  account: '',
  name: '',
  isLoading: false,
  errorMsg: null,
};

export default function (state = userInitialState, action) {
  switch (action.type) {
    case 'LOGOUT': {
      return userInitialState;
    }
    case 'LOGIN_REQUEST': {
      return { ...state, isLoading: true, errorMsg: null };
    }
    case 'LOGIN_SUCCESS': {
      const {
        data: { data },
        status,
      } = action.response;
      return status === 200
        ? {
          ...state,
          isLoading: false,
          account: data.m_account,
          name: data.m_name,
          errorMsg: null,
        }
        : state;
    }
    case 'LOGIN_ERROR':
      return { ...state, errorMsg: action.error.message, isLoading: false };

    default:
      return state;
  }
}
