import React from "react";
import {getPeople} from "../api/tmdb-api";
import PageTemplate from '../components/templatePeopleListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const TVShowsPage = () => {
    const {data, error, isLoading, isError} = useQuery('people', getPeople)

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