export const getMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
    .then((response) => {
        if(!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
    .catch((error) => {
        throw error
    });
};
  
export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const {id} = idPart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
        if(!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    }).catch((error) => {
        throw error
    });
};

export const getGenres = () => {
    return fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
    .then((response) => {
        if(!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
    .catch((error) => {
        throw error
    });
};

export const getMovieImages = ({queryKey}) => {
    const [, idPart] = queryKey;
    const {id} = idPart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    .then((response) => {
        if(!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
    .catch((error) => {
        throw error
    });
};

export const getMovieReviews = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    .then((res) => res.json())
    .then((json) => {
        return json.results;
    });
};

export const getUpcomingMovies = (args) => {
    const [,] = args.queryKey;
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if(!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    }).catch((error) => {
        throw error
    });
};

export const getTopRatedMovies = (args) => {
    const [,] = args.queryKey;
    return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if(!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    }).catch((error) => {
        throw error;
    });
};

export const getTVShows = () => {
    return fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    ).then((response) => {
        if(!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    }).catch((error) => {
        throw error;
    });
};

export const getPeople = () => {
    return fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    ).then((response) => {
        if(!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    }).then((data) => {
        console.log('People structure:', data.results.length > 0 ? data.results[2] : 'No people');
        return data;
    }).catch((error) => {
        throw error;
    });
};

export const getPerson = (args) => {
    const [, idPart] = args.queryKey;
    const {id} = idPart;
    return fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
        if(!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    }).catch((error) => {
        throw error
    });
};