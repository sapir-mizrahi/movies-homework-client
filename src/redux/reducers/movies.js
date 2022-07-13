import produce from "immer";
import createReducer from "./reducerUtils";

const initalStaste = {
  currentMovieToModal: {},
  moviesToView: [],
  modalShow: false
};

const user = {
  setCurrentMovieToModal(state, action) {
    state.currentMovieToModal = action.payload;
  },

  setMoviesToView(state, action) {
    debugger
    state.moviesToView = action.payload;
  },
  setModalShow(state, action) {
    state.modalShow = action.payload;
  },
};

export default produce(
  (state, action) => createReducer(state, action, user),
  initalStaste
);
