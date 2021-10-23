import { createSelector } from 'reselect';
import { initialState } from './signup.reducer';

const selectSignUpDomain = state => state.signup || initialState;

const makeSelectName = () => createSelector(selectSignUpDomain, substate => substate.signUpForm.name);

const makeSelectEmail = () => createSelector(selectSignUpDomain, substate => substate.signUpForm.email);
const makeSelectPassword = () => createSelector(selectSignUpDomain, substate => substate.signUpForm.password);

export { selectSignUpDomain, makeSelectName, makeSelectEmail, makeSelectPassword };
