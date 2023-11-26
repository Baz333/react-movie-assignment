import React from "react";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import { Paper } from "@mui/material";
import { Chip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Typography from "@mui/material/Typography";
import { getTVSeasonCast } from "../../api/tmdb-api";
import Spinner from '../spinner';
import CastListing from "../cast";
import Grid from "@mui/material/Grid";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const chip = {margin: 0.5};

const TVSeasonDetails = (props) => {
    const seasonObj = props.season;
    const {id, season} = useParams();
    const {data, error, isLoading, isError} = useQuery(
        ["show_cast", {id: id}, {season: season}],
        getTVSeasonCast
    );

    if(isLoading) {
        return <Spinner />;
    }

    if(isError) {
        return <h1>{error.message}</h1>;
    }

    const castSeason = data.cast;
    
    const castList = [];

    for(let i = 0; i < castSeason.length; i++) {
        castList.push(
            <Grid key={castSeason[i].id} item xs={12} sm={6} md={4}>
                <CastListing key={castSeason[i].id} person={castSeason[i]} />
            </Grid>
        )
    }

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>
            <Typography variant="h6" component="p">
                Season {seasonObj.season_number}
            </Typography>
            <Paper component="ul" sx={{...root}}>
                <Chip icon={<CalendarMonthIcon />} label={`First episode: ${seasonObj.air_date}`} sx={{...chip}} />
                <Chip icon={<CalendarMonthIcon />} label={`Episodes: ${seasonObj.episodes.length}`} sx={{...chip}} />
                <Chip icon={<CalendarMonthIcon />} label={`Average rating: ${seasonObj.vote_average}`} sx={{...chip}} />
            </Paper>
            <Typography variant="h5" component="h3">
                Cast
            </Typography>
            <Paper
                component="ul"
                sx={{...root}}
            >
                {castList}
            </Paper>
        </>
    );
};
export default TVSeasonDetails;