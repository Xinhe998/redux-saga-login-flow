import { put, call, takeEvery } from 'redux-saga/effects';
import { api } from '../services';

export function* loginFlow(action) {
  try {
    const response = yield call(api.login, {
      m_account: action.payload.username,
      m_pasword: action.payload.password,
    });
    yield put({ type: 'LOGIN_SUCCESS', response });
    yield localStorage.setItem('accessToken', response.data.token);
    yield window.location.reload();
  } catch (error) {
    yield put({ type: 'LOGIN_ERROR', error });
  }
}

export function* watchRequestLogin() {
  yield takeEvery('LOGIN_REQUEST', loginFlow);
}

export function* logoutFlow(action) {
  yield localStorage.clear();
  yield window.location.reload();
}

export function* watchRequestLogout() {
  yield takeEvery('LOGOUT', logoutFlow);
}
