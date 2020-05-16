import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import { handleActions, createAction } from 'redux-actions';

const TEMP_SET_UESR = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  'user/CHECK',
);

const LOGOUT = 'auth/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_UESR, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);
const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log('loccalStroage is not working');
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_UESR]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);
