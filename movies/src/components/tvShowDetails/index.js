import React from "react";
import {useQuery} from "react-query";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import { getTVShowCast } from "../../api/tmdb-api";
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

const TVShowDetails = ({show}) => {

    const {data, error, isLoading, isError} = useQuery(
        ["show_cast", {id: show.id}],
        getTVShowCast
    );

    if(isLoading) {
        return <Spinner />;
    }

    if(isError) {
        return <h1>{error.message}</h1>;
    }

    const castTV = data.cast;
    
    const castList = [];

    for(let i = 0; i < castTV.length; i++) {
        castList.push(
            <Grid key={castTV[i].id} item xs={12} sm={6} md={4} lg={3}>
                <CastListing key={castTV[i].id} person={castTV[i]} />
            </Grid>
        )
    }

    const seasonsList = [];

    for(let i = 0; i < show.number_of_seasons; i++) {
        seasonsList.push(
            <li key={i}>
                <Link to={`/tvshows/${show.id}/season/${i+1}`}>
                    <Paper sx={{...root}}>
                        Season {i+1}
                    </Paper>
                </Link>
            </li>
        );
    }

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>
            <Typography variant="h6" component="p">
                {show.overview}
            </Typography>
            <Paper
                component="ul"
                sx={{...root}}
            >
                <li>
                    <Chip label="Genres" sx={{...chip}} color="primary" />
                </li>
                {show.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} sx={{...chip}} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" sx={{...root}}>
                {show.episode_run_time > 0 && <Chip icon={<AccessTimeIcon />} label={`${show.episode_run_time} min.`} />}
                <Chip icon={<CalendarMonthIcon />} label={`First aired: ${show.first_air_date}`} />
                <Chip icon={<VideoLibraryIcon />} label={`Seasons: ${show.number_of_seasons}`} />
                <Chip icon={<SlideshowIcon />} label={`Episodes: ${show.number_of_episodes}`} />
            </Paper>
            <Paper
                component="ul"
                sx={{...root}}
            >
                <li>
                    <Chip label="Languages" sx={{...chip}} color="primary" />
                </li>
                {show.spoken_languages.map((l) => (
                    <li key={l.english_name}>
                        <Chip label={l.english_name} sx={{...chip}} />
                    </li>
                ))}
            </Paper><br />
            <Paper
                component="ul"
                sx={{...root}}
            >
                {seasonsList}
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
export default TVShowDetails;