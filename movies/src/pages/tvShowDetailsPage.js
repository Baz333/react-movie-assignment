import React from "react";
import {useParams} from "react-router-dom";
import {getTVShow} from '../api/movies-api';
import {useQuery} from "react-query";
import Spinner from '../components/spinner';
import TVShowDetails from '../components/tvShowDetails';
import PageTemplate from "../components/templateTVShowPage";

const TVShowPage = (props) => {
    const {id} = useParams();
    const {data: show, error, isLoading, isError} = useQuery(
        ["show", {id: id}],
        getTVShow
    );

    if(isLoading) {
        return <Spinner />;
    }

    if(isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {show ? (
                <>
                    <PageTemplate show={show}>
                        <TVShowDetails show={show} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for show details</p>
            )}
        </>
    );
};

export default TVShowPage;