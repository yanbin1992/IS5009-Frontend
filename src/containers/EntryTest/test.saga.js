import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { POST_ENTRY_TEST } from './test.constants';
import { postEntryTestAPI } from './test.api';
import { postEntryTestAction, postEntryTestSuccess, postEntryTestFailure } from './test.actions';
import { selectEntryTestDomain, makeSelectLevel } from './test.selectors';

export function* postEntryTestSaga(payload) {
  const { email, level } = payload.payload
  console.log('saga payload', payload)
  try {
    const resultLevel = yield call(postEntryTestAPI, { email, level });
    console.log(resultLevel)
    yield put(postEntryTestSuccess(resultLevel));
    yield put(push('/account'));
  } catch (error) {
    yield put(postEntryTestFailure(error));
  }
}

export default function* entryTestSaga() {
  yield takeLatest(POST_ENTRY_TEST, postEntryTestSaga);
}
