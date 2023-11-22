import React from "react";
import {getTVShows} from "../api/tmdb-api";
import PageTemplate from '../components/templateTVShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const TVShowsPage = () => {
    console.log("Before query");
    const {data, error, isLoading, isError} = useQuery('tv', getTVShows)
    console.log("After query");

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const shows = data.results;

    return (
        <PageTemplate
            title='Discover TV Shows'
            shows={shows}
        />
    );
};
export default TVShowsPage;