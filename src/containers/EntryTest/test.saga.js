import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { POST_ENTRY_TEST } from './test.constants';
import { postEntryTestAPI } from './test.api';
import { postEntryTestSuccess, postEntryTestFailure } from './test.actions';

export function* postEntryTestSaga(payload) {
  const { email, level } = payload.payload
  try {
    const resultLevel = yield call(postEntryTestAPI, { email, level });
    yield put(postEntryTestSuccess(resultLevel));
    yield put(push('/me'));
  } catch (error) {
    yield put(postEntryTestFailure(error));
  }
}

export default function* entryTestSaga() {
  yield takeLatest(POST_ENTRY_TEST, postEntryTestSaga);
}
