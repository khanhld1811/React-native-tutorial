const urlGetMovies = 'http://5df1bf4d9df6fb00142bdc70.mockapi.io/api/getName/movies';
const urlAddMovies = 'http://5df1bf4d9df6fb00142bdc70.mockapi.io/api/getName/movies';

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
    alert(newMovie.name)
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

export const Api = {
    getMovieFromApi,
    insertNewMovieFromApi
}