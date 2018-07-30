import { createSelector } from 'reselect';

/**
 * Direct selector to the lunaDeMiel state domain
 */
const selectLunaDeMielDomain = () => (state) => state.get('lunaDeMiel');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LunaDeMiel
 */

const makeSelectLunaDeMiel = () => createSelector(
  selectLunaDeMielDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLunaDeMiel;
export {
  selectLunaDeMielDomain,
};
