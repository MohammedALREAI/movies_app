import axios from "axios"
import { FETCH_MOVIES_More_TOP_FILA, FETCH_MOVIES_More_TOP_START, FETCH_MOVIES_More_TOP_SUCCESS, FETCH_MOVIES_TOP_FILA, FETCH_MOVIES_TOP_START, FETCH_MOVIES_TOP_SUCCESS } from "./movies.type"

// export const fetchSlider = (page=1) =>
//      async (dispatch ,getState) => {
//           console.log("enerddd to dispatch")

//           dispatch({
//                type: FETCH_MOVIES_TOP_START
//           })
//           try {
//                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=97b4d64197afe59716022374bc942648&page=${page}`)
//                console.log("the response ", response.data)
//                let movies = getState().movies.movies
//                const newState=[ ...movies,response.data.results]
//                     localStorage.setItem("movies", JSON.stringify(newState));

//                dispatch({
//                     type: FETCH_MOVIES_TOP_SUCCESS,
//                     payload: []
//                })
//           } catch (e) {
//                dispatch({
//                     type: FETCH_MOVIES_TOP_FILA,
//                })
//           }

//      }

export const fetchSliderMore = (page = 1) => {
     return async (dispatch, getState) => {

          dispatch({
               type: FETCH_MOVIES_More_TOP_START
          })
          try {
               const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=97b4d64197afe59716022374bc942648&page=${page}`)
               console.log("the response ", response.data)
               let movies = getState().movies.movies

               const newState = [...movies, ...response.data.results]
               localStorage.setItem("movies", JSON.stringify(newState));
               console.log("mee", response.data.results)
               console.log("mee new movies", newState)

               dispatch({
                    type: FETCH_MOVIES_More_TOP_SUCCESS,
                    payload: [...getState().movies.movies,...response.data.results]
               })
          } catch (e) {
               dispatch({
                    type: FETCH_MOVIES_More_TOP_FILA,
               })
          }

     }
}
