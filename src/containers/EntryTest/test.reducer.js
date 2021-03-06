import produce from 'immer';
import { POST_ENTRY_TEST, POST_ENTRY_TEST_SUCCESS, POST_ENTRY_TEST_FAILURE } from './test.constants';

export const initialState = {
  level: {
    income: 0,
    experience: 0,
    risk: 0,
  },
};

/* eslint-disable default-case, no-param-reassign */
const entryTestReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case POST_ENTRY_TEST:
        console.log('POST_ENTRY_TEST');
        draft.entryTest = action.payload.data;
        break;
      case POST_ENTRY_TEST_SUCCESS:
        console.log('POST_ENTRY_TEST_SUCCESS');
        draft.entryTest = action.payload.data;
        break;
      case POST_ENTRY_TEST_FAILURE:
        console.log('POST_ENTRY_TEST_FAILURE');
        draft.entryTest = action.payload.data;
        break;
    }
  });

export default entryTestReducer;
