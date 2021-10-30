import {
  POST_ENTRY_TEST,
  POST_ENTRY_TEST_SUCCESS,
  POST_ENTRY_TEST_FAILURE
} from './test.constants';

export const postEntryTestAction = payload => ({ type: POST_ENTRY_TEST, payload });
export const postEntryTestSuccess = payload => ({ type: POST_ENTRY_TEST_SUCCESS, payload });
export const postEntryTestFailure = payload => ({ type: POST_ENTRY_TEST_FAILURE, payload });