import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import userReducer from './userReducer';

export const history = createBrowserHistory();
const storeFs = combineReducers({
  user: userReducer,
  router: connectRouter(history),
});

export default storeFs;
