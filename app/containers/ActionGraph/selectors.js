import { createSelector } from 'reselect';

/**
 * Direct selector to the actionGraph state domain
 */
const selectActionGraphDomain = () => (state) => state.actionGraph;

/**
 * Other specific selectors
 */


/**
 * Default selector used by ActionGraph
 */

const makeSelectActionGraph = () => createSelector(
  selectActionGraphDomain(),
  (substate) => substate
);

export default makeSelectActionGraph;
export {
  selectActionGraphDomain,
};
