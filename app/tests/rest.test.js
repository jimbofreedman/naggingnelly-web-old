/**
 * Test rest addons
 */

import configureMockStore from 'redux-mock-store';
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

      it('complete should return fn', () => {
        const store = mockStore({});
        store.dispatch(rest.actions.actions.complete(id));
        expect(store.getActions()[0].request.pathvars).toEqual({ fn: 'complete', id });
      });

      it('cancel should return fn', () => {
        const store = mockStore({});
        store.dispatch(rest.actions.actions.cancel(id));
        expect(store.getActions()[0].request.pathvars).toEqual({ fn: 'cancel', id });
      });

      it('fail should return fn', () => {
        const store = mockStore({});
        store.dispatch(rest.actions.actions.fail(id));
        expect(store.getActions()[0].request.pathvars).toEqual({ fn: 'fail', id });
      });
    });
  });
});

