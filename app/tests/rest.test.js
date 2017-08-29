/**
 * Test rest addons
 */

import { fromJS } from 'immutable';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import rest, { stripDoubleSlashes, dictionaryTransformer } from '../rest';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('rest', () => {
  describe('stripDoubleSlashes', () => {
    it('should remove double slashes from URLs', () => {
      const result = stripDoubleSlashes('gtd/actions//56');
      expect(result).toBe('gtd/actions/56');
    });
  });

  describe('dictionaryTransformer', () => {
    it('preserve existing data', () => {
      const obj = { 1: { id: 1, value: 'dogs' } };
      const result = dictionaryTransformer([], obj);
      expect(result).toEqual(obj);
    });

    it('should put a single object into a dictionary', () => {
      const obj = { id: 1, value: 'dogs' };
      const result = dictionaryTransformer(obj, undefined);
      expect(result).toEqual({ 1: obj });
    });

    it('should put an array into a dictionary', () => {
      const obj1 = { id: 1, value: 'dogs' };
      const obj2 = { id: 2, value: 'cats' };
      const result = dictionaryTransformer([obj1, obj2], undefined);
      expect(result).toEqual({ 1: obj1, 2: obj2 });
    });
  });

  describe('actions', () => {
    describe('helpers', () => {
      const id = 1;
      fetchMock.post('*', { hello: 'world' });

      it('complete should return fn', () => {
        const store = mockStore(fromJS({}));
        const action = rest.actions.actions.complete(id);
        return store.dispatch(action).then(() => {
          const actions = store.getActions();
          expect(actions[0].request.pathvars).toEqual({ fn: 'complete', id: 1 });
        });
      });

      it('cancel should return fn', () => {
        const store = mockStore(fromJS({}));
        const action = rest.actions.actions.cancel(id);
        return store.dispatch(action).then(() => {
          const actions = store.getActions();
          expect(actions[0].request.pathvars).toEqual({ fn: 'cancel', id: 1 });
        });
      });

      it('fail should return fn', () => {
        const store = mockStore(fromJS({}));
        const action = rest.actions.actions.fail(id);
        return store.dispatch(action).then(() => {
          const actions = store.getActions();
          expect(actions[0].request.pathvars).toEqual({ fn: 'fail', id: 1 });
        });
      });
    });
  });
});

