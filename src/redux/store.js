import { createStore, combineReducers, applyMiddleware } from 'redux';
import { getTop10Movies, searchMovie } from './middlewares/crud';
import moviesReducer from './reducers/movies';

const reducer = combineReducers({ moviesReducer });

const store = createStore(reducer, applyMiddleware( getTop10Movies, searchMovie));
window.store = store

export default store;