import produce from 'immer';
import { ON_CHANGE_NAME, ON_CHANGE_EMAIL, ON_CHANGE_PASSWORD } from './signup.constants';

export const initialState = {
  signUpForm: {
    name: '',
    email: '',
    password: '',
    level: {
      income: 0,
      experience: 0,
      risk: 0
    }
  },
};

/* eslint-disable default-case, no-param-reassign */
const signUpReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ON_CHANGE_NAME:
        draft.signUpForm.name = action.payload;
        break;
      case ON_CHANGE_EMAIL:
        draft.signUpForm.email = action.payload;
        break;
      case ON_CHANGE_PASSWORD:
        draft.signUpForm.password = action.payload;
        break;
    }
  });

export default signUpReducer;
