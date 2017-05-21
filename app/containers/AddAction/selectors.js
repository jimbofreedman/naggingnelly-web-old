import { createSelector } from 'reselect';

/**
 * Direct selector to the addAction state domain
 */
const selectAddActionDomain = () => (state) => state.get('addAction');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddAction
 */

const makeSelectAddAction = () => createSelector(
  selectAddActionDomain(),
  (substate) => substate //.toJS()
);

export default makeSelectAddAction;
export {
  selectAddActionDomain,
};
