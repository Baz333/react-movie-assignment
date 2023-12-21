export const getMovies = async () => {
    const response = await  fetch(
    	`http://localhost:8080/api/movies`, {
			headers: {
				'Authorization': window.localStorage.getItem('token')
			}
		}
    )
    return response.json()
};

export const getUpcomingMovies = async () => {
    const res = await fetch(
        `http://localhost:8080/api/movies/tmdb/upcoming`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    );
    return res.json();
}

export const getTopRatedMovies = async () => {
    const res = await fetch(
        `http://localhost:8080/api/movies/tmdb/top-rated`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    );
    return res.json();
}

export const getMovie = async (args) => {
    const [, idPart] = args.queryKey;
    const {id} = idPart;
    console.log(idPart);
    const res = await fetch(
        `http://localhost:8080/api/movies/${id}`, {
            headers: {'Authorization': window.localStorage.getItem('token')}
        }
    );
    return res.json();
}

export const getTVShow = async (args) => {
    const [, idPart] = args.queryKey;
    const {id} = idPart;
    console.log(idPart);
    const res = await fetch(
        `http://localhost:8080/api/tvshows/${id}`, {
            headers: {'Authorization': window.localStorage.getItem('token')}
        }
    );
    return res.json();
}

export const getTVSeason = async (args) => {
    const [, idPart, seasonPart] = args.queryKey;
    const {id} = idPart;
    const {season} = seasonPart;
    console.log(idPart);
    const res = await fetch(
        `http://localhost:8080/api/tvshows/${id}/season/${season}`, {
            headers: {'Authorization': window.localStorage.getItem('token')}
        }
    );
    return res.json();
}

export const getPerson = async (args) => {
    const [, idPart] = args.queryKey;
    const {id} = idPart;
    console.log(idPart);
    const res = await fetch(
        `http://localhost:8080/api/people/${id}`, {
            headers: {'Authorization': window.localStorage.getItem('token')}
        }
    );
    return res.json();
}

export const login = async (username, password) => {
	const response = await fetch('http://localhost:8080/api/users', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'post',
		body: JSON.stringify({username: username, password: password})
	});
	return response.json();
};

export const signup = async (username, password) => {
	const response = await fetch('http://localhost:8080/api/users?action=register', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'post',
		body: JSON.stringify({username: username, password: password})
	});
	return response.json();
};