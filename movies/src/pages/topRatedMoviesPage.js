import React from "react";
import {getTopRatedMovies} from "../api/movies-api";
import PageTemplate from "../components/templateMovieListPage";
import {useQuery} from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";

const TopRatedMoviesPage = (props) => {
    const {data, error, isLoading, isError} = useQuery('topRated', getTopRatedMovies)

    if(isLoading) {
        return <Spinner />;
    }

    if(isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data.results;
    
    return (
        <PageTemplate
            title="Top Rated Movies"
            movies={movies}
            action={(movie) => {
                return <AddToWatchlistIcon movie={movie} />
            }}
        />
    );
};

export default TopRatedMoviesPage;