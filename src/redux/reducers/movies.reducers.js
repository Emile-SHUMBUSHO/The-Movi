const initialState = {
    is_loading: false,
    nowPlayingMovie: [],
    movieDetails: {},
    error: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "POP MOVIES FETCHING":
        return {
          ...state,
          is_loading: true,
        };
  
      case "POP MOVIES FETCH SUCCESSFUL":
        return {
          ...state,
          is_loading: false,
          nowPlayingMovie: action.payload,
          error: null,
        };
  
      case "POP MOVIES FETCH FAILED":
        return {
          ...state,
          is_loading: false,
          error: action.payload,
        };
  
      case "MOVIE DETAILS FETCHING":
        return {
          ...state,
          is_loading: true,
        };
  
      case "MOVIE DETAILS FETCH SUCCESSFUL":
        return {
          ...state,
          is_loading: false,
          nowPlayingMovie: action.payload,
          error: null,
        };
  
      case "MOVIE DETAILS FETCH FAILED":
        return {
          ...state,
          is_loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  