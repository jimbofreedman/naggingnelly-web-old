import { createSelector } from 'reselect';

/**
 * Direct selector to the actionList state domain
 */
const selectActionListDomain = () => (state) => state.get('actionList');
const selectActions = () => (state) => state.get('actions');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ActionList
 */

const makeSelectActionList = () => createSelector(
  selectActionListDomain(),
  (substate) => substate.toJS()
);

export default makeSelectActionList;
export {
  selectActionListDomain,
  selectActions,
};
