
import { fromJS } from 'immutable';
import actionListReducer from '../reducer';

import {
  defaultAction,
} from '../actions';

describe('actionListReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({});
  });

  it('returns the initial state', () => {
    expect(actionListReducer(undefined, {})).toEqual(fromJS({}));
  });

  it('should handle the default action correctly', () => {
    const expectedResult = fromJS({});

    expect(actionListReducer(state, defaultAction())).toEqual(expectedResult);
  });
});
