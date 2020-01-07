import { ADD_MOVIE, FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, UPDATE_MOVIE,UPDATE_SUCCEEDED,DELTE, DELETE_SUCCEEDED } from '../actions/actionTypes';

const movieReducers = (movies = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receiveMovies;
        case FETCH_FAILED:
            return [];
        // case ADD_MOVIE:
        //     return [
        //         ...movies,
        //         action.newMovie
        //     ];
        // case UPDATE_MOVIE:
        //     return movies;//do nothing
        case UPDATE_SUCCEEDED:
            return movies.map(eachMovie =>
                (eachMovie.id.toString() === action.updatedMovie.id)
                ? {...eachMovie,
                        name: action.updatedMovie.name,
                    releaseYear: action.updatedMovie.releaseYear}
                    : eachMovie)
                    case DELETE_SUCCEEDED:
                        const filteredMovies = movies.filter(eachMovie => {                
                            return eachMovie.id !== action.deletedMovieId;
                        });
                        return filteredMovies;
            default:
                return movies;//state does not change
    }
}

export default movieReducers;