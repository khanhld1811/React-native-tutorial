const urlGetMovies = 'http://5df1bf4d9df6fb00142bdc70.mockapi.io/api/getName/movies';
const urlAddMovies = 'http://5df1bf4d9df6fb00142bdc70.mockapi.io/api/getName/movies';
const urlUpdateMovie = 'http://5df1bf4d9df6fb00142bdc70.mockapi.io/api/getName/movies';
const urlDeleteMovie = 'http://5df1bf4d9df6fb00142bdc70.mockapi.io/api/getName/movies';

function* getMovieFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: "GET"
    }).then(response => response.json())
        .then(responseJson => {
            return responseJson;
        })
        .catch(error => {
            console.error(error);
        });
    return response;
}

//Send POST request to add new Movie
function* insertNewMovieFromApi(newMovie) {
    const response = yield fetch(urlAddMovies, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: newMovie.name,
            releaseYear: newMovie.releaseYear,
        }),
    }).then(response => response.json())
        .then(responseJson => {
            console.log(responseJson)
            return responseJson;
        });
    return response;
}

//send PUT request to update existing movie
function* updateMovieFromApi(updatedMovie) {
    alert(updatedMovie.id)
    const urlLink = `${urlUpdateMovie}/${updatedMovie.id.toString()}`;
    try {
        let response = yield fetch(urlLink, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedMovie)
        });
        return yield (response.status === 200);
    }
    catch (error) {
    }

}


//send DELETE request to update existing movie
function* deleteMovieFromApi(deletedMovieId){
    console.log((`delete ${deletedMovieId}`))
    const urlLink = `${urlUpdateMovie}/${deletedMovieId}`;
    try {
        let response = yield fetch(urlLink, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

            }),
        });
        return yield (response.status === 200);
    }
    catch (error) {
    }
}

export const Api = {
    getMovieFromApi,
    insertNewMovieFromApi,
    updateMovieFromApi,
    deleteMovieFromApi
}

