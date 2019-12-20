import { call, all,fork} from 'redux-saga/effects';
import {watchFetchMovies, watchAddNewMovie} from './MovieSaga';

export default function* rootSaga(){
    yield fork(watchFetchMovies);
    yield fork(watchAddNewMovie);
}