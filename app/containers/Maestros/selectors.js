import { createSelector } from 'reselect';

/**
 * Direct selector to the maestros state domain
 */
const selectMaestrosDomain = () => (state) => state.get('maestros');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Maestros
 */

const makeSelectMaestros = () => createSelector(
  selectMaestrosDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMaestros;
export {
  selectMaestrosDomain,
};
