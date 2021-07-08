import { FETCH_MOVIES_More_TOP_FILA, FETCH_MOVIES_More_TOP_START, FETCH_MOVIES_More_TOP_SUCCESS, FETCH_MOVIES_TOP_FILA, FETCH_MOVIES_TOP_START, FETCH_MOVIES_TOP_SUCCESS } from "./movies.type"





export const MoviesReducer = (state = {
     movies: [],
     loading: false,
     error:''


}, action) => {
  console.log("my actions",action);
// eslint-disable-next-line default-case
     switch (action.type) {

          // case FETCH_MOVIES_TOP_START:

          //      return {
          //           ...state,
          //           loading: true
          //      }
          // case FETCH_MOVIES_TOP_SUCCESS:
          //      return {
          //           ...state,
          //           loading: false,

          //           movies: []
          //      }
          // case FETCH_MOVIES_TOP_FILA:
          //      return {
          //           ...state,
          //           error: action.payload
          //      }

                     case FETCH_MOVIES_More_TOP_START:
               return {
                    ...state,
                    loading: true
               }
          case FETCH_MOVIES_More_TOP_SUCCESS:
               return {
                    ...state,
                    loading: false,

                    movies: action.payload
               }
          case FETCH_MOVIES_More_TOP_FILA:
               return {
                    ...state,
                    error: action.payload
               }


          default: return state

     }
}








