import axios from "axios";

export const fetchNowPlayingMovies = () => {
  return (dispatch) => {
    const key = "835f090de1e629571963fd0ec5d0a082";

    dispatch({ type: "POP MOVIES FETCHING" });

    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    })
      .then((responseData) => {
        const { data } = responseData;
        console.log(responseData);
        dispatch({
          type: "POP MOVIES FETCH SUCCESSFUL",
          payload: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "POP MOVIES FETCH FAILED", payload: err.message });
      });
  };
};