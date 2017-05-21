
import { fromJS } from 'immutable';
import addActionReducer from '../reducer';

describe('addActionReducer', () => {
  it('returns the initial state', () => {
    expect(addActionReducer(undefined, {})).toEqual(fromJS({}));
  });
});
