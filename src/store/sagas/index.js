import { fork, all } from 'redux-saga/effects';
import { watchRequestLogin, watchRequestLogout } from './login';

export default function* rootSaga() {
  yield all([fork(watchRequestLogin), fork(watchRequestLogout)]);
}
