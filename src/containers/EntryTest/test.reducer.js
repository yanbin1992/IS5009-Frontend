import produce from 'immer';
import { POST_TEST_RESULT } from './test.constants';
import { POST_SIGN_OUT } from 'containers/SignOut/signout.constants';

export const initialState = {
  testResult: {
    level
  },
};

/* eslint-disable default-case, no-param-reassign */
const signInReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ON_CHANGE_EMAIL:
        draft.singInForm.email = action.payload;
        break;
      case ON_CHANGE_PASSWORD:
        draft.singInForm.password = action.payload;
        break;
      case POST_SIGN_OUT:
        draft.singInForm = { ...initialState.singInForm };
        break;
    }
  });

export default signInReducer;
