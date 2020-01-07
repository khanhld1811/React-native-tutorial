import { call, all,fork} from 'redux-saga/effects';
import {watchFetchMovies, watchAddNewMovie, watchUpdateMovie, watchDeleteMovie} from './MovieSaga';

export default function* rootSaga(){
    yield fork(watchFetchMovies);
    yield fork(watchAddNewMovie);
    yield fork(watchUpdateMovie);
    yield fork(watchDeleteMovie);
}