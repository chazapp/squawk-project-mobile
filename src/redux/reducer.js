const initialState = {
  isFetching: false,
  error: '',
  token: '',
  sources: [],
  content: [],
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
        error: action.data.toString(),
      };
    }
    case 'FETCH_SOURCES': {
      return {
        ...state,
      };
    }
    case 'FETCHED_SOURCES': {
      return {
        ...state,
        sources: action.data,
      };
    }
    case 'FETCH_SOURCES_ERROR': {
      return {
        ...state,
        error: action.data.toString(),
      };
    }
    case 'FETCH_SOURCE_CONTENT': {
      return {
        ...state,
      };
    }
    case 'FETCHED_SOURCE_CONTENT': {
      return {
        ...state,
        content: action.data,
      };
    }
    case 'FETCHED_SOURCE_CONTENT_ERROR': {
      return {
        ...state,
        error: action.data.toString(),
      };
    }
    default: {
      return initialState;
    }
  }
};

export default asyncReducer;
