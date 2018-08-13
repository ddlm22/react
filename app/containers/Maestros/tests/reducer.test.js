
import { fromJS } from 'immutable';
import maestrosReducer from '../reducer';

describe('maestrosReducer', () => {
  it('returns the initial state', () => {
    expect(maestrosReducer(undefined, {})).toEqual(fromJS({}));
  });
});
