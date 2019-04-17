import store from './store';

export const connectUser = () => ({
  type: 'CONNECT',
});

export const connectedUser = token => ({
  type: 'CONNECTED',
  data: token,
});

export const connectFailed = error => ({
  type: 'CONNECT_FAILED',
  data: error,
});

export const fetchSources = () => ({
  type: 'FETCH_SOURCES',
});

export const fetchedSources = sources => ({
  type: 'FETCHED_SOURCES',
  data: sources,
});

export const fetchSourcesFailed = error => ({
  type: 'FETCH_SOURCES_ERROR',
  data: error,
});

export const actionConnectUser = (email, password) => {
  const contentType = 'application/json';
  store.dispatch(connectUser());
  return () => fetch('https://squawkapi.chaz.pro/auth', {
    method: 'POST',
    headers: {
      'Content-Type': contentType,
    },
    body: JSON.stringify({
      email, password,
    }),
  }).then(response => response.json())
    .then((responseJson) => {
      store.dispatch(connectedUser(responseJson.token));
    })
    .catch((error) => {
      store.dispatch(connectFailed(error));
    });
};

export const actionFetchSourceList = (token) => {
  const contentType = 'application/json';
  store.dispatch(fetchSources());
  return () => fetch('https://squawkapi.chaz.pro/sources', {
    method: 'GET',
    headers: {
      'Content-Type': contentType,
      Authorization: `Bearer ${token}`,
    },
  }).then(response => response.json())
    .then((responseJson) => {
      store.dispatch(fetchedSources(responseJson.sources));
    })
    .catch((error) => {
      store.dispatch(fetchSourcesFailed(error));
    });
};
