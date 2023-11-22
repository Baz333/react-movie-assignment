import React from "react";
import {getPeople} from "../api/tmdb-api";
import PageTemplate from '../components/templatePeoplePage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const TVShowsPage = () => {
    console.log("Before query");
    const {data, error, isLoading, isError} = useQuery('people', getPeople)
    console.log("After query");

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const people = data.results;

    return (
        <PageTemplate
            title='Discover People'
            people={people}
        />
    );
};
export default TVShowsPage;