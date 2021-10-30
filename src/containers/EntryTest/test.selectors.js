import { createSelector } from 'reselect';
import { initialState } from './test.reducer';

const selectSignInDomain = state => state.test || initialState;

const makeSelectEmail = () =>
  createSelector(
    selectSignInDomain,
    substate => substate.singInForm.email,
  );
const makeSelectPassword = () =>
  createSelector(
    selectSignInDomain,
    substate => substate.singInForm.password,
  );

export { selectSignInDomain, makeSelectEmail, makeSelectPassword };
