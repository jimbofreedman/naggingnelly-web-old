
import actionReducer from '../reducer';

describe('actionReducer', () => {
  it('returns the initial state', () => {
    expect(actionReducer(undefined, {})).toEqual({});
  });
});
