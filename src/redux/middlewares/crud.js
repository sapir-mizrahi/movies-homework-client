import { actions } from "../actions";

const url = "http://localhost:4000/api";

export const getTop10Movies =
  ({ dispatch }) =>
    (next) =>
      (action) => {
        if (action.type === "GET_TOP10_MOVIES") {
          return fetch(`${url}/movies/getTop10Movies`)
            .then((response) => response.json())
            .then((data) => {
              dispatch(actions.setMoviesToView(data.data));
            });
        }
        return next(action);
      };

export const searchMovie =
  ({ dispatch }) =>
    (next) =>
      (action) => {
        if (action.type === "SEARCH_MOVIE") {
          let search = action.payload;
          return fetch(`${url}/movies/searchMovie/${search}`)
            .then((response) => response.json())
            .then((data) => {
              dispatch(actions.setMoviesToView(data.data.Search));
            });
        }
        return next(action);
      };
