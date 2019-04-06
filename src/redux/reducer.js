const initialState = {
  isFetching: false,
  error: null,
  token: '',
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONNECT': {
      return {
        ...state,
      };
    }
    case 'CONNECTED': {
      return {
        ...state,
        token: action.data,
      };
    }
    case 'CONNECT_FAILED': {
      return {
        ...state,
        error: action.data,
      };
    }
    default: {
      return initialState;
    }
  }
};

export default asyncReducer;
