/**
 * MovieContainer connect Redux with MovieComponent
 */

import { connect } from 'react-redux';
import MovieComponent from '../components/MovieComponent';

//Actions
import {
    addMovieAction, fetchFailedAction, fetchSuccessAction,
    fetchMoviesAction, updateItemAction,
    updateItemSuccessAction,
    deleteItemAction,
    deleteItemSuccessAction
} from '../actions';

const mapStateToProps = (state) => {
    console.log(state.movieReducers)
    return {
        movies: state.movieReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMoviesAction());
        },

        onAddMovie: (newMovie) => {
            dispatch(addMovieAction(newMovie));
        },
        onUpdateItemAction: (updatedMovie) => {
            dispatch(updateItemAction(updatedMovie));
        },
        onUpdateItemSuccessAction: (updatedMovie) => {
            dispatch(updateItemSuccessAction(updatedMovie));
        },
        //delete a movie
        onDeleteItemAction: (deletedMovieId) => {
            dispatch(deleteItemAction(deletedMovieId));
        },
    };
}

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;