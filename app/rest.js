import reduxApi from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';
import Cookies from 'universal-cookie';
import config from 'config';

const options = {
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

function stripDoubleSlashes(url) {
  const ret = url.replace(/([^:]\/)\/+/g, '$1');
  return ret;
}

function fetchWithCsrfToken(url, request) {
  const cookies = new Cookies();
  const csrfToken = cookies.get('csrftoken');
  const newHeaders = Object.assign({}, request.headers, { 'X-CSRFToken': csrfToken });
  const newRequest = Object.assign({}, request, { headers: newHeaders });
  return fetch(stripDoubleSlashes(url), newRequest);
}

function dictionaryTransformer(data, prevData /* , action */) {
  const newData = {};

  if (prevData !== undefined) {
    for (const id in prevData) {
      newData[id] = prevData[id];
    }
  }

  if (data !== undefined) {
    if (data.constructor === Array) {
      data.map((item) => {
        newData[item.id] = item;
      });
    } else {
      newData[data.id] = data;
    }
  }

  return newData;
}

export default reduxApi({
  actions: {
    url: '/gtd/actions/(:id)/(:fn)/',
    transformer: dictionaryTransformer,
    crud: true,
    reducerName: 'actions',
    helpers: {
      complete(id) {
        return [{ id, fn: 'complete' }, { method: 'post' }];
      },
      cancel(id) {
        return [{ id, fn: 'cancel' }, { method: 'post' }];
      },
      fail(id) {
        return [{ id, fn: 'fail' }, { method: 'post' }];
      },
    },
    options,
  },
  graph: {
    url: '/gtd/actions/graph_json/',
    helpers: {
      complete() {
        return [ {}, { method: 'get' }];
      },
    },
    options,
  },

}).use('fetch', adapterFetch(fetchWithCsrfToken))
  .use('rootUrl', config.api.endpoint);

