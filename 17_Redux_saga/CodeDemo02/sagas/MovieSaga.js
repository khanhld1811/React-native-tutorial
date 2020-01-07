import { FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, ADD_MOVIE, UPDATE_SUCCEEDED, UPDATE_MOVIE,DELETE_MOVIE,DELETE_SUCCEEDED } from '../actions/actionTypes';

//saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchMovies() {
    try {
        const receiveMovies = yield Api.getMovieFromApi();
        yield put({ type: FETCH_SUCCEEDED, receiveMovies: receiveMovies });
    }
    catch (error) {
        console.log(`Error = ${error}`);
        yield put({ type: FETCH_FAILED, error });
    }
}
/**
 * Theo dõi sự thay đổi
 */
export function* watchFetchMovies() {
    /**
     * takeLatest chỉ lấy action cuối cùng được gọi
     */
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}

function* addNewMovie(action) {
    try {
        const result = yield Api.insertNewMovieFromApi(action.newMovie)
        if (result === true) {
            yield put({ type: ADD_MOVIE, sort: 'desc' })
        }
    }
    catch (error) {
        alert(`insertNewMovieFromApi ${error}`);
    }
}

export function* watchAddNewMovie(){
    yield takeLatest(ADD_MOVIE, addNewMovie);
}

//Update a movie
function* updateMovie(action){
    try{
        const result = yield Api.updateMovieFromApi(action.updatedMovie);
        if(result === true){
            yield put({type:UPDATE_SUCCEEDED, updatedMovie: action.updatedMovie});
        }
    }
    catch(error){
            alert(`UpdateMovieFromApi${error}`)
    }
}

export function* watchUpdateMovie(){
    yield takeLatest(UPDATE_MOVIE, updateMovie);
}

//Delete a movie
function* deleteMovie(action){
    try{
        const result = yield Api.deleteMovieFromApi(action.deletedMovieId);
        if(result === true){
            yield put({type: DELETE_SUCCEEDED, deletedMovieId: action.deletedMovieId})
            alert('success');
        }else{
           
        }
    }
    catch(error){
        console.error(error);
    }
}

export function* watchDeleteMovie(){
    yield takeLatest(DELETE_MOVIE, deleteMovie);
}