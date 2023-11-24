import React from "react";
import {useParams} from "react-router-dom";
import {getTVSeason} from '../api/tmdb-api';
import {useQuery} from "react-query";
import Spinner from '../components/spinner';
import TVSeasonDetails from "../components/tvSeasonDetails";
import PageTemplate from "../components/templateTVSeasonPage";

const TVSeasonPage = (props) => {
    const {id, season} = useParams();
    const {data: seasonObj, error, isLoading, isError} = useQuery(
        ["season", {id: id}, {season: season}],
        getTVSeason
    );

    if(isLoading) {
        return <Spinner />;
    }

    if(isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {seasonObj ? (
                <>
                    <PageTemplate season={seasonObj} >
                        <TVSeasonDetails season={seasonObj} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for season details</p>
            )}
        </>
    );
};

export default TVSeasonPage;