import { createSelector } from 'reselect';

/**
 * Direct selector to the action state domain
 */
const selectActionDomain = () => (state) => state.action;

/**
 * Other specific selectors
 */


/**
 * Default selector used by Action
 */

const makeSelectAction = () => createSelector(
  selectActionDomain(),
  (substate) => substate
);

export default makeSelectAction;
export {
  selectActionDomain,
};
