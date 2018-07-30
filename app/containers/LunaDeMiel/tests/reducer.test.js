
import { fromJS } from 'immutable';
import lunaDeMielReducer from '../reducer';

describe('lunaDeMielReducer', () => {
  it('returns the initial state', () => {
    expect(lunaDeMielReducer(undefined, {})).toEqual(fromJS({}));
  });
});
