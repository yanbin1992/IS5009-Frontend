import produce from 'immer';
import { POST_ENTRY_TEST, POST_ENTRY_TEST_SUCCESS, POST_ENTRY_TEST_FAILURE } from './test.constants';

export const initialState = {
  entryTest: {
    level: {
      income: 0,
      experience: 0,
      risk: 0
    }
  },
};

/* eslint-disable default-case, no-param-reassign */
const entryTestReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case POST_ENTRY_TEST:
        console.log('POST_ENTRY_TEST')
        // draft.entryTest.level = action.payload;
        break;
      case POST_ENTRY_TEST_SUCCESS:
        console.log('POST_ENTRY_TEST_SUCCESS')
        // draft.entryTest.level = action.payload;
        break;
      case POST_ENTRY_TEST_FAILURE:
        console.log('POST_ENTRY_TEST_FAILURE')
        // draft.entryTest.level = action.payload;
        break;
    }
  });

export default entryTestReducer;
