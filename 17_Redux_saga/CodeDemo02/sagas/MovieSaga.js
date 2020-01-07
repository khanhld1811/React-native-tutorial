import { FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, ADD_MOVIE } from '../actions/actionTypes';

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
        else {

        }
    }
    catch (error) {
        alert(`insertNewMovieFromApi ${error}`);
    }
}

export function* watchAddNewMovie(){
    yield takeLatest(ADD_MOVIE, addNewMovie);
}
