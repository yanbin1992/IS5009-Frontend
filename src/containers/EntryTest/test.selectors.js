import { createSelector } from 'reselect';
import { initialState } from './test.reducer';

const selectEntryTestDomain = state => {
  console.log(state);
  if (state && state.test && state.test.entryTest) {
    return state.test.entryTest;
  } else return initialState;
};

const makeSelectLevel = () => createSelector(selectEntryTestDomain, substate => substate.level);

export { selectEntryTestDomain, makeSelectLevel };
