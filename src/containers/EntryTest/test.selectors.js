import { createSelector } from 'reselect';
import { initialState } from './test.reducer';

const selectEntryTestDomain = state => state.entryTest || initialState;

const makeSelectLevel = () =>
  createSelector(
    selectEntryTestDomain,
    substate => substate.entryTest.level,
  );

export { selectEntryTestDomain, makeSelectLevel };
