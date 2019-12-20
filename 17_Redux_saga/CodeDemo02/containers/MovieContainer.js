/**
 * MovieContainer connect Redux with MovieComponent
 */

 import {connect} from 'react-redux';
 import MovieComponent from '../components/MovieComponent';

 //Actions
import {addMovieAction, fetchFailedAction, fetchSuccessAction, fetchMoviesAction} from '../actions';
 const mapStateToProps = (state) => {
     console.log(state.movieReducers)
     return{
        movies: state.movieReducers
     }
 }

 const mapDispatchToProps = (dispatch) => {
     return{
        onFetchMovies: () => {
            dispatch(fetchMoviesAction());
        },

        onAddMovie: (newMovie) => {
            alert(newMovie.releaseYear);
            dispatch(addMovieAction(newMovie));
        }
     };
 }

 const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
 export default MovieContainer;