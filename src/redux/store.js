import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MoviesReducer } from "./Movies/Reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
const reducers = combineReducers({
  movies: MoviesReducer,

});

const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies")) || [];

let initialState = {
     movies: {
          movies:moviesFromLocalStorage
     }
}



const middlewares = [thunk];

const store = createStore(
     reducers,
     initialState,
     composeWithDevTools(
  applyMiddleware(...middlewares))
);

export default store;
