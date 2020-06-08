import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

import * as postsAPI from "../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";
const SET_ORIGIN_POST = "write/SET_ORIGIN_POST";
export const setOriginalPost = createAction(SET_ORIGIN_POST, (post) => post);

const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes("write/WRITE_POST");

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
  title: "",
  body: "",
  tags: [],
  post: null,
  postError: null,
  orginalPostId: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST]: (state) => ({
      ...state,
      post: null,
      postsError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      state,
      post,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [SET_ORIGIN_POST]: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      body: post.body,
      tags: post.tags,
      orginalPostId: post._id,
    }),
  },
  initialState
);

export default write;
