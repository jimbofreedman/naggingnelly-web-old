import { createSelector } from 'reselect';

/**
 * Direct selector to the actionList state domain
 */
const selectActionListDomain = () => (state) => state.actionList;

/**
 * Other specific selectors
 */


/**
 * Default selector used by ActionList
 */

const makeSelectActionList = () => createSelector(
  // selectActionListDomain(),
  (substate) => substate,
);

export default makeSelectActionList;
export {
  selectActionListDomain,
};
