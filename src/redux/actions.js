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

export const actionConnectUser = (email, password) => {
  const contentType = 'application/json';
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
